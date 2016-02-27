(function () {
  'use strict';
  var React = require('react');

  const Copyrights = React.createClass({
    getInitialState() {
      return {
      };
    },
    render() {
      return (
        <span>&copy; 2016 Dotz</span>
      );
    }
  });

  module.exports = Copyrights;
}());
