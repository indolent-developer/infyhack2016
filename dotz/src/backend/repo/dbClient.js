
var cassandra = require('cassandra-driver');
var Utils = require('../../utils/serverUtils');

var CassandraClient = {

  genConnStrFromUrl: function (conUrl) {
    'use strict';
    let connStr = {};
    let parsedUrl = Utils.parseURL(conUrl);
    if (parsedUrl) {
      connStr.contactPoints = [parsedUrl.hostname];
      if (parsedUrl.pathname) {
        connStr.keyspace = parsedUrl.pathname.substring(1);
      }
      connStr.protocolOptions = {};
      connStr.protocolOptions.port = parsedUrl.port;
      if (parsedUrl.auth) {
        let indexOfSep = parsedUrl.auth.indexOf(':');
        if (indexOfSep !== -1) {
          let user = parsedUrl.auth.substring(0, indexOfSep);
          let pwd = parsedUrl.auth.substring(indexOfSep + 1);
          connStr.authProvider = new cassandra.auth.PlainTextAuthProvider(user, pwd);
        }
      }
    }
    return connStr;
  },

  getDbClient : function () {
    'use strict';
    console.info('Fetching db connection...');

    var connectionUrl = process.env.CASSANDRA_ADDRESS;

    if (!connectionUrl) {
      console.error('Evironment variable missing. CASSANDRA_ADDRESS');
      throw new Error('Evironment variable missing. CASSANDRA_ADDRESS',
        'dbClient.js');
    }
    var contStr = this.genConnStrFromUrl(connectionUrl);

    var client = new cassandra.Client(contStr);
    console.info('connection obtained.');

    return client;
  }
};


module.exports = CassandraClient.getDbClient();
