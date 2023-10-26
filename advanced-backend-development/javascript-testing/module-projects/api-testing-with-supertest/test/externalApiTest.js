const request = require('supertest');
const assert = require('assert');

request('https://dog.ceo')
    .get('/api/breeds/image/random')
    .expect(200)
    .expect('Content-Type','application/json')
    .expect((res) => {
        assert(res.body.hasOwnProperty('status'));
        assert(res.body.hasOwnProperty('message'));
    })
    .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
    });

// Using SuperTest with Mocha 
describe('Random Dog Image', function() {
    it('responds with expected JSON structure', function(done) {
      request('https://dog.ceo')
        .get('/api/breeds/image/random')
        .expect(200)
        .expect('Content-Type', 'application/json')
        .expect(/{"message":".*","status":"success"}/, done);
    });
  });