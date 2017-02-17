var requester = require('../helpers/Requester');
var roomsConfig = require('../../resources/rooms.json');
var tokenConfig = require('../../config/token.json');
var generalConfig = require('../../config/config.json');
var tokenGenerator = require('./Login');
var token;

tokenGenerator.postLogin(function (err, res) {
    token = res.body.token;
});

var url = generalConfig.url + roomsConfig.endpoint;
var header = {
    'Authorization': 'jwt ' + token
};

function getRooms(callback) {
    requester
        .getRequest(url, header, function (err, res) {
            callback(err, res);
        });
}

exports.getRooms = getRooms;
