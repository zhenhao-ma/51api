var express = require('express');
var router = express.Router();
let reject = require('../../errorHandlers/promiseReturnError');
let jwt = require('../../utils/jwt');


const topSearched = require('../../../config/config').app.socialMedia.trending.topSearched;

router.post('/top-searched', function(req, res, next) {
    res.body['data'] = topSearched[Math.floor(Math.random() * topSearched.length)];
    res.send(res.body);
});

router.post('/top-searched-list', function(req, res, next) {
    res.body['data'] = topSearched;
    res.send(res.body);
});

module.exports = router;
