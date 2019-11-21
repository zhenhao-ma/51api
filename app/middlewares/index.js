let header = require('./header');
var cors = require('cors'); // using wildcard cors!! npm install --save cors, allowing cors modification in express js
let enforcedRestful = require('./enforcedRestful');
let apiDesp = require('./apiDesp');

module.exports = [
    header,
    enforcedRestful,
    apiDesp,
    cors()
];
