(function () {
  'use strict';
  var Reactaddon = require('react/addons');
  var ReactDOMServer = require('react-dom/server');
  var Home = Reactaddon.createFactory(require('../components/pages/homePage'));
  var Login = Reactaddon.createFactory(require('../components/pages/loginpage'));
  var Journal = Reactaddon.createFactory(require('../components/pages/journalpage'));
  var Feedback = Reactaddon.createFactory(require('../components/pages/feedbackpage'));
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
    },
    renderLogin: function (req, res) {
      console.info('Login page called.');
      var initState = {};

      // Return the page to the browser
      var html = ReactDOMServer.renderToString(Login(initState));

      var initStateStr = serverUtils.safeStringify(initState);

      //tLogger.error(html);
      res.render('index.ejs', {
        reactOutput: html,
        initialState: initStateStr
      });
    },
    renderJournal: function (req, res) {
      console.info('Home page called.');
      var initState = {};

      // Return the page to the browser
      var html = ReactDOMServer.renderToString(Journal(initState));

      var initStateStr = serverUtils.safeStringify(initState);

      //tLogger.error(html);
      res.render('index.ejs', {
        reactOutput: html,
        initialState: initStateStr
      });
    },
    renderFeedback: function (req, res) {
      console.info('Feedback  page called.');
      var initState = {};

      // Return the page to the browser
      var html = ReactDOMServer.renderToString(Feedback(initState));

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

    app.route('/login').get(function (req, res) {
    'use strict';
      return pageRenders.renderLogin(req, res);
    });

    app.route('/login').post(function (req, res) {
    'use strict';

      return res.redirect(301, '/home');
    });


    app.route('/journal').get(function (req, res) {
    'use strict';
      return pageRenders.renderJournal(req, res);
    });

    app.route('/feedback').get(function (req, res) {
    'use strict';
      return pageRenders.renderFeedback(req, res);
    });





};



}());
