(function () {
  'use strict';
  var React = require('react');
  var MasterPage = require('./masterPage');

  const Copyrights = React.createClass({
    getInitialState() {
      return {
      };
    },
    render() {
      return (
        <MasterPage >
          <div>
          <div><span>This is your recent activity. Please provide feedback to give back to community.</span></div>

            <div className="alert alert-info">
              <span>Check in at Frankfurt Airport.  Feb 27 8:30PM</span>
              <button type="button" className="btn btn-default pull-right" aria-label="Left Align">
                Feedback
              </button>
            </div>

            <div className="alert alert-info">
              <span>Dinner at Diners</span>
              <button type="button" className="btn btn-default pull-right" aria-label="Left Align">
                Feedback
              </button>
            </div>


            <div className="alert alert-info">
              <span>Saloon visit</span>
              <button type="button" className="btn btn-default pull-right" aria-label="Left Align">
                Feedback
              </button>
            </div>


            <div className="alert alert-info">
              <span>Check in at Frankfurt Airport.</span>
              <button type="button" className="btn btn-default pull-right" aria-label="Left Align">
                Feedback
              </button>
            </div>

            <div className="alert alert-info">
              <span>Check in at Frankfurt Airport.</span>
              <button type="button" className="btn btn-default pull-right" aria-label="Left Align">
                Feedback
              </button>
            </div>


          </div>
        </MasterPage>
      );
    }
  });

  module.exports = Copyrights;
}());
