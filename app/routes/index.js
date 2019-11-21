var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    res.body['readme'] = '这个Api是供新手学习前端的时候使用的。同样作为开发者，我知道很多新手在学习前端开发的过程中是需要使用到API。这个Api是基于nodejs和express的。通过使用这个Api，可以帮助新手避免自己动手进行后端开发，把更多的注意力和精力放在学好前端。';
    res.send(res.body)
});

module.exports = router;
