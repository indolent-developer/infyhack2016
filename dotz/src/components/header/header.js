(function () {
  'use strict';
  var React = require('react');
  var Menu =require('./menu');

  const Copyrights = React.createClass({
    getInitialState() {
      return {
      };
    },
    render() {
      return (
        <div className="row-fluid">
          <div className="navbar navbar-inverse">
            <div className="navbar-inner">
              <div className="container-fluid">
                  <Menu />
              </div>
              <div className="headertitle">
                <span>DOTZz</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = Copyrights;
}());
