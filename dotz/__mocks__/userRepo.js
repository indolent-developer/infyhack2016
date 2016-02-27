/*
Mocked version of userRepo.js for Jest testing
*/
jest.dontMock('../src/backend/repo/userRepo.js');
var User = require('../models/User');
var cassandraClient = require('../dbClient');

describe('sum', function() {
 it('Has Vishal logged in', function() {
   var user = require('../sum');
   expect(userRepo('Vishal', null)).toBe(3);
 });
});