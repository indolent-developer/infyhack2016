(function () {
  'use strict';
  var React = require('react');
  var Header = require('../header/header');

  const masterPage = React.createClass({
    getInitialState() {
      return {
      };
    },
    render() {
      return (
          <div>
            <Header/>
            {this.props.children}
         </div>
      );
    }
  });

  module.exports = masterPage;
}());
