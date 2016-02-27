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
        <div>
        <div>
          <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
        </div>
        <div className="nav-collapse collapse">
          <ul className="nav">
          <li className="active"><a href="#"><i className="icon-home icon-white"></i> Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="">Favorites</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
        </div>
        </div>
      );
    }
  });

  module.exports = Copyrights;
}());
