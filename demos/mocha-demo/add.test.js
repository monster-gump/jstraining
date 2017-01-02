var add = require('./add.js');
var expect = require('chai').expect;

describe('testing for add method', function() {
  it('1 plus 1 should equal 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});

describe('testing for add method', function() {
  it('-1 plus -2 should equal -3', function() {
    expect(add(-1, -2)).to.be.equal(-3);
  });
});
