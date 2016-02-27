(function() {
  'use strict';
  /*
    This module is responsible for handling user data.
   */
  //var jQuery = require('jquery');
  var Jquery = require('jquery'); //eslint-disable-line no-unused-vars
  var User = require('../models/User');
  var Session = require('../session');
  var Repo = require('../repo/userRepo');

  var userApi = function () {
    this.userRepo = new Repo();
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

    var getJournal = function (username, callback) {

      userRepo.getJournal(username, function (err, journalData) {
       if (!err) {

       } else {
         console.error('Login failure:' + err);
         error = new Error('Something went wrong while getJournal. err ' + err);
         error.typeOfError = 'SystemError';
         callback(err);
       }
     });
    };

    return {
      constructor: userApi,
      login: function (username, password, callback) {
        return login.call(this, username, password, callback);
      },

      getJournal: function (username, password, callback) {
        return getJournal.call(this, username, callback);
      }

    };
  }());

  module.exports = userApi;
}());
