(function () {
  'use strict';
  var Reactaddon = require('react/addons');
  var ReactDOMServer = require('react-dom/server');
  var Home = Reactaddon.createFactory(require('../components/pages/homePage'));
  var ReactDOMServer = require('react-dom/server');
  var serverUtils = require('../utils/serverUtils');
  module.exports = function (app) {

  var pageRenders = {
    renderHome: function (req, res) {
      console.info('Home page called.');
      var initState = {};

      // Return the page to the browser
      var html = ReactDOMServer.renderToString(Home(initState));

      var initStateStr = serverUtils.safeStringify(initState);

      //tLogger.error(html);
      res.render('index.ejs', {
        reactOutput: html,
        initialState: initStateStr
      });
    }
  };


    app.route('/home').get(function (req, res) {
    'use strict';
      return pageRenders.renderHome(req, res);
  });





};



}());
