
# Steps to run this application

# Install node from https://nodejs.org/en/

# Install all the modules using
$ npm install

# Install gulp https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
$ npm install -g gulp

# build the application using. The command will keep watching for changes and do
# build on changes.
$ gulp

# set the environment variable.
$ DRP_HTTP_PORT = 30001

# start a new console and start the server.
$ node server.js

# open browser http://localhost:30001/login
# use http://localhost:30001/journal to access journal page.

# to run unit test install jest-cli https://www.npmjs.com/package/jest-cli
# npm install jest-cli 
# to run test use command.
$ npm test --watch
