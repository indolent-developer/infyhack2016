(function () {
  'use strict';
  var React = require('react');
  var MasterPage = require('./masterPage');

  const homePage = React.createClass({
    getInitialState() {
      return {
      };
    },
    render() {
      return (
        <MasterPage >
          <div>
          </div>
        </MasterPage>
      );
    }
  });

  module.exports = homePage;
}());
