var url = require('url');

module.exports = {

  parseURL: function (urlStr) {
    'use strict';
    return url.parse(urlStr, true);
  },
  safeStringify: function (obj) {
    'use strict';
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
  },
};
