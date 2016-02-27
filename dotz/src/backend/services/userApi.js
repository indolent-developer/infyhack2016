(function() {
  'use strict';
  //var jQuery = require('jquery');
  var Jquery = require('jquery'); //eslint-disable-line no-unused-vars
  var User = require('../models/User');
  var Session = require('../session');
  var Repo = require('../repo/userRepo');
  var Config = require('../../config/server-config.js');
  var config = new Config();
  var async = require('async');

  var userApi = function(logger) {
    this.logger = logger;
    this.userRepo = new Repo(config, logger);
  };

  userApi.prototype = (function () {
    var setUserPermissions = function (userObj, userRepo, tLogger, callback) {
      userRepo.getRolePermissions(['82a7e2f4-9aeb-4208-8022-d40b7650b743'],
        function (permissionErr, permissionList) {
          if (!permissionErr) {
            userObj.permissionList = permissionList;
          } else {
            tLogger.error('Failed to fetch user permissions. err:' + permissionErr);
            userObj.permissionList = null;
          }
          callback(null);
        });
    };

    var saveLogin = function (userRepo, tLogger, userObj, callback) {
      /* Persist the current login TS in DB */
      userRepo.saveLogin(userObj.userName, function (loginSaveErr) {
        if (loginSaveErr) {
          tLogger.error('Failed to save login information. Err:' + loginSaveErr);
        } else {
          tLogger.debug('Login information saved successfully.');
        }
        callback(null);
      });
    };

    var getLastLogin = function (userRepo, tLogger, userObj, callback) {
      //Get last login timestamp
      userRepo.getLastLogin(userObj.userName, function (lastLoginErr, lastLogin) {
        tLogger.debug('lastLoginErr:' + lastLoginErr + '  lastLogin:' + lastLogin);
        if ((typeof lastLoginErr !== 'undefined' && lastLoginErr) || !lastLogin) {
          tLogger.error('Failed to fetch last login. Using current time. Error:' + lastLoginErr);
          //Default it to current ts - 1 hour
          lastLogin = Date.now();
        } else {
          userObj.setGetLastLoginTs(lastLogin);
          Session.user.lastLogOutTs = lastLogin;
          tLogger.debug('login Ts: ' + lastLogin);
        }
        callback(null);
      });
    };

    var login = function (username, password, callback) {
      let tLogger = this.logger;
      let userRepo = this.userRepo;
      var unauthUser = new User(username, password);
      var error = null;

      userRepo.getUser(username, function (err, validUser) {
       if (!err) {
         if (!validUser || !validUser.equals(unauthUser)) {
           error = new Error('Wrong username or password');
           error.typeOfError = 'LoginError';
           callback(error);
         } else {
           tLogger.debug('login success. username:' + username);
           validUser.email = username; // TODO may change later.

           async.series(
             [
               function (doneCallback) {
                 setUserPermissions(validUser, userRepo, tLogger, doneCallback);
               },
               function (doneCallback) {
                 getLastLogin(userRepo, tLogger, validUser, doneCallback);
               },
               function (doneCallback) {
                 saveLogin(userRepo, tLogger, validUser, doneCallback);
               }
             ],
             function doneCallback() {
               return callback(null, validUser);
             }
           );
         }
       } else {
         console.error('Login failure:' + error);
         error = new Error('Something went wrong while authenticating user. err ' + err);
         error.typeOfError = 'SystemError';
         callback(error);
       }
     });
    };

    return {
      constructor: userApi,
      login: function (username, password, callback) {
        return login.call(this, username, password, callback);
      }

    };
  }());

  module.exports = userApi;
}());
