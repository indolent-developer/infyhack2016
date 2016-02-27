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
        <div ClassName="row">
            <div ClassName="col-sm-4">
                <span>Please enter your Login name:</span>
                <input type="text" value=""></input>
            </div>
        </div>
      );
    }
  });

  module.exports = Copyrights;
}());
