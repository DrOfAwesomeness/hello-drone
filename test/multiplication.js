var should = require('chai').should(),
    multiply = require('../lib/multiply.js').multiply;

describe('multiply.js', function() {
    it('should properly multiply', function() {
        multiply(10, 10).should.equal(100);
    });
});
