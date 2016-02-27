'use strict';

var dbClient = require('./src/repo/dbClient');
var cookieParser = require('cookie-parser');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cassandra = require('cassandra-driver');

function startWebServer() {
  // get the port from env variable.
  var port = process.env.DRP_HTTP_PORT;

  if (!port) {
    Logger.getLogger().error('Environment variable DRP_HTTP_PORT missing. ');

    throw new Error('Environment variable DRP_HTTP_PORT missing.', 'server.js');
  }

  // Code to run if we're in a worker process
  var app = express();

  // Include static assets. Not advised for production
  //app.use("/:solution/:feature", express.static(path.join(__dirname, 'dist')));
  //app.use('/images', express.static(path.join(__dirname, 'dist/images')));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use(cookieParser());

  require('node-jsx').install();
  // Set view path
  app.set('views', path.join(__dirname, 'src/views'));
  // set up ejs for templating. You can use whatever
  app.set('view engine', 'ejs');

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  var server = require('http').createServer(app);

  var io = require('./src/stores/socketServer')(server);

  //
  // Set up Routes for the application
  require('./src/routes/routes.js')(app);

  

  server.listen(port);
  console.info('Server is up and Running at Port : ' + port);
}

startWebServer();
