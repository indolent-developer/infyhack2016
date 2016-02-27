(function () {
  'use strict';

  global.jQuery = require('jquery');
  global.$ = require('jquery');
  var Reactaddon = require('react/addons');
  var ReactDOMServer = require('react-dom/server');
  var Home = Reactaddon.createFactory(require('./components/pages/homePage'));
  var Login = Reactaddon.createFactory(require('./components/pages/loginPage'));
  var Journal = Reactaddon.createFactory(require('./components/pages/journalPage'));
  var Feedback = Reactaddon.createFactory(require('./components/pages/feedbackPage'));

  //$ = jQuery = require('jquery');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var bootstrap = require('bootstrap'); //eslint-disable-line no-unused-vars

  var ClientApp = {
    render: function () {
      if (window.location.href.toLowerCase().indexOf('home') > 0) {
        ReactDOM.render(Home(window.INITIAL_STATE),
         document.getElementById('react-main-mount'));
      }
      if (window.location.href.toLowerCase().indexOf('login') > 0) {
        ReactDOM.render(Login(window.INITIAL_STATE),
         document.getElementById('react-main-mount'));
      }

      if (window.location.href.toLowerCase().indexOf('journal') > 0) {
        ReactDOM.render(Journal(window.INITIAL_STATE),
         document.getElementById('react-main-mount'));
      }

      if (window.location.href.toLowerCase().indexOf('feedback') > 0) {
        ReactDOM.render(Feedback(window.INITIAL_STATE),
         document.getElementById('react-main-mount'));
      }
    }
  };

  module.exports = ClientApp;



  ClientApp.render();
}());
