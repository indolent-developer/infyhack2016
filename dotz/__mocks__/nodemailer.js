// __mocks__/nodemailer.js

// Get the automatic mock for `fs`
var nodemailerMock = jest.genMockFromModule('nodemailer');

// Dummy implementation of transporter
var transporter = {
  sendMail: function (email, callback) {
    if (email && email.from &&
          email.from.indexOf('@') > -1 &&
          ((email.to && email.to.indexOf('@') > -1)
            || (email.cc && email.cc.indexOf('@') > -1)
            || (email.bcc && email.bcc.indexOf('@') > -1)))
    {
      return callback (null, {response: 'Good'});
    } else {
      return callback ('error', null);
    }
  }
};

// A custom version of `createTransport` that returns transporter
function createTransport(gateway, options) {
  'use strict';
  return transporter;
};

// Override the default behavior of the `createTransport` mock
nodemailerMock.createTransport.mockImplementation(createTransport);

module.exports = nodemailerMock;
