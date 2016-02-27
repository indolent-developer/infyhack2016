(function () {
  'use strict';
  var Logger = require('../logger');
  //var LogWrapper = require('../logWrapper');
  var Constants = require('../constants/Constants');
  var Utils = require('../utils/serverUtils');
  //var Config = require('../../config/server-config.js');

  var socketServer = function (http) {

    if (!http) {
      console.error('http is missing. Can\'t initialize  socket server');
      return;
    }

    var io = require('socket.io')(http);

    global.io = io;

    io.on('connection', function (socket) {

      global.socket = socket;

      Logger.getLogger().debug('a user connected');

      socket.on('disconnect', function () {
        Logger.getLogger().debug('user disconnected');
      });

      socket.on('error', function (err) {
        Logger.getLogger().error('Scoket io ' + err);
      });

    });
  };

  module.exports = socketServer;
}());
