var expect = require('chai').expect;
var rooms = require('../../lib/features/Rooms');

context('Smoke Tests for Rooms´ feature', function () {
    var expectedStatus = 200;
    this.timeout(5000);

    //Get and validate rooms´ status code 200
    it('GET /login returns 200', function (done) {
        rooms.getRooms(function (err, res) {
            expect(res.status).to.equal(expectedStatus);
            done();
        });
    });
});
