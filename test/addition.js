var should = require('chai').should(),
    add = require('../lib/add.js').add;
describe('add.js', function() {
    it('should properly add', function() {
        add(1, 1).should.equal(2);
    });
});
