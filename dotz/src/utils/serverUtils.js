var url = require('url');

module.exports = {

  parseURL: function (urlStr) {
    'use strict';
    return url.parse(urlStr, true);
  }
};
