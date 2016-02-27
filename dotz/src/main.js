(function () {
  'use strict';

  global.jQuery = require('jquery');
  global.$ = require('jquery');

  var HomePage = require('./components/pages/homePage')

  //$ = jQuery = require('jquery');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var bootstrap = require('bootstrap'); //eslint-disable-line no-unused-vars

  var ClientApp = {
    render: function () {
      if (window.location.href.toLowerCase().indexOf('login') > 0) {
        ReactDOM.render(LoginPage(window.INITIAL_STATE),
         document.getElementById('react-main-mount'));
      }
    }
  };

  module.exports = ClientApp;



  ClientApp.render();
}());
