(function() {
  'use strict';

  var User = require('../../models/User');
  var dbClient = require('./dbClient');
  var Utils = require('../utils/utils');
  var async = require('async');

  var userRepo = function(config, logger) {
    this.config = config;
    this.logger = logger;
  };

  userRepo.prototype = (function() {
    var getUser = function(username, callback) {
      if (!dbClient || !dbClient.execute) {
        return callback('Unable to connect to db.', null);
      }

      var validUser = null;

      dbClient.execute('select user_id  from ' +
      'dotz.users where user_name = ? limit 1', [username],
      function(err, result) {
        if (!err) {
          if (result.rows.length > 0) {
            let row = result.rows[0];
            let userId=row.get('user_id');
            validUser = new User(username,userId);
            callback(null, validUser);
          } else {
            callback(err, null);
          }
        } else {
          callback(err, null);
        }
      });

      return {
              constructor: userRepo,
              getUser: function (username, callback) {
                return getUser.call(this, username, callback);
              }
            };
          }());

          module.exports = userRepo;
  }());
