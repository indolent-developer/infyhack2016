(function () {
  'use strict';
  var React = require('react');

  const Copyrights = React.createClass({
    getInitialState() {
      return {
        name: '',
        password: ''
      };
    },
    render() {
      return (
        <form className="form-signin" action={'/login'} method="post">
        <div className="row">
            <div className="col-sm-4">
                <span>Login name:</span>
                <input type="text" value={this.state.name}></input>
            </div>
            <div className="col-sm-4">
                <span>Password name:</span>
                <input type="text" value={this.state.password}></input>
            </div>
            <div>
              <input type="submit" value="Login"></input>
            </div>
        </div>
        </form>
      );
    }
  });

  module.exports = Copyrights;
}());
