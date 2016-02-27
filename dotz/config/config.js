
'use strict';
module.exports = {
  client: {
    socketServerUrl: 'http://localhost:30001',
    locales: {
      supported: ['en', 'en-US', 'fr', 'fr-FR', 'es', 'es-MX', 'de', 'de-DE'],
      keyValue: {
        'en-US': 'English-US',
        'de-DE': 'Deutsche-DE'
      },
      default: 'en-US'
    },
    logoutUrl: '/logout'
  }
};
