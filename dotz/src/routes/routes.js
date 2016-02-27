(function () {
  'use strict';



  module.exports = function (app) {
    app.route('/hello').get(function (req, res) {
    'use strict';

    res.send('Hello');

  });
};

}());
