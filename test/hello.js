'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('hello', '/src/handler.js', 'hello');

describe('Stelligent service tests', () => {

  it('test where response is not empty', () => {
    return wrapped.run({}).then((response) => {
      console.log(response);
      expect(response).to.not.be.empty;
    });
  });

  it('test that should validate the message field', () => {
    return wrapped.run({}).then((response) => {
      const body = JSON.parse(response.body);
      console.log(`message is: ${body.message}`);
      expect(body.message).to.equal('Automation for the People');
    });
  });

  it('test that should validate the timestamp field length', () => {
    return wrapped.run({}).then((response) => {
      const body = JSON.parse(response.body);
      console.log(`timestamp is: ${body.timestamp}`);
      console.log(body.timestamp.length);
      expect(body.timestamp.length).equal(13);
    });
  });

});
