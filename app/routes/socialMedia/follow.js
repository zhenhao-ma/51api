let random = require('../../utils/random');
let express = require('express');
let router = express.Router();
let jwt = require('../../utils/jwt');
let hasKeys = require('../../utils/utils').hasKeys;

router.post('/total-follower', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = random.int(0, 5000);
    res.send(res.body);
});

router.post('/total-following', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = random.int(0, 10000000);
    res.send(res.body);
});

router.post('/people', function (req, res, next) {
    jwt.require(res);
    let total = req.body.total || 5;
    res.body['data'] = [];
    for (let k = 0; k < total; k ++) {
        res.body['data'].push({
            username: random.username(),
            userId: random.userId(),
            avatar: random.avatar(),
            userDescription: random.userDescription()
        })
    }
    res.send(res.body);
});

router.post('/follow', function (req, res, next) {
   jwt.require(res);
   if (hasKeys(req.body, ['userId']) && req.body.userId.isUuid4()) {
       res.body['data'] = true;
       res.send(res.body())
   }
    throw new Error('请提供一个正确的userId，这个userId是别的用户的userId，通过这个userId来帮助你关注该用户。')
});

router.post('/unfollow', function (req, res, next) {
    jwt.require(res);
    if (hasKeys(req.body, ['userId']) && req.body.userId.isUuid4()) {
        res.body['data'] = true;
        res.send(res.body())
    }
    throw new Error('请提供一个正确的userId，这个userId是别的用户的userId，通过这个userId来帮助你取消关注该用户。')
});

module.exports = router;
