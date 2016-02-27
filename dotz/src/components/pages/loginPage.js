(function () {
  'use strict';
  var React = require('react');
  var MasterPage = require('./masterPage');
  var Login = require('../login/login');

  const homePage = React.createClass({
    getInitialState() {
      return {
      };
    },
    render() {
      return (
        <MasterPage >
          <div>
            <Login />
          </div>
        </MasterPage>
      );
    }
  });

  module.exports = homePage;
}());
