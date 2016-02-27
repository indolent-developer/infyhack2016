(function () {
  'use strict';

  function User(username, userId) {
    this.username = username || null;
    this.userId = userId || null;
  }

  User.prototype.getUsername = function () {
    return this.username;
  };

  User.prototype.getUserId = function () {
      return this.userId;
    };

  module.exports = User;
}());
