/*
Mocked version of userRepo.js for Jest testing
*/
jest.dontMock('../src/');
var User = require('../models/User');
var cassandraClient = require('../dbClient');

