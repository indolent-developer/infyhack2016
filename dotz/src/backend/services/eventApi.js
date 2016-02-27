(function() {
  'use strict';
  //var jQuery = require('jquery');
  var Jquery = require('jquery'); //eslint-disable-line no-unused-vars

  //var Session = require('../session');
  //var Repo = require('../repo/userRepo');
  var Config = require('../../config/server-config.js');
  var config = new Config();
  

  var eventApi = function (logger) {
    this.logger = logger;
    //this.userRepo = new Repo(config, logger);
  };

  eventApi.prototype = (function () {

    var method1 = function (username, password, callback) {
      // int
    };

    return {
      constructor: userApi
    };
  }());

  module.exports = eventApi;
}());
