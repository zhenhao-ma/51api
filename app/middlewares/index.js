let header = require('./header');
var cors = require('cors'); // using wildcard cors!! npm install --save cors, allowing cors modification in express js
let enforcedRestful = require('./enforcedRestful');
let apiDesp = require('./apiDesp');
let validateJwt = require('./validateJwt');

module.exports = [
    header,
    enforcedRestful,
    apiDesp,
    validateJwt,
    cors()
];
