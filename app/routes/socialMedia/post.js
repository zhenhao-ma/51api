let random = require('../../utils/random');
let express = require('express');
let router = express.Router();
let jwt = require('../../utils/jwt');

router.post('/user-posts', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = [];
    for (let k = 0; k < 5; k ++) {
        res.body['data'].push(
            {
                text: random.post(),
                postId: random.postId(),
                video: random.item([null, random.video()]),
                image: random.image(),
                forward: random.int(0, 999), // retweet
                like: random.int(0, 999),
                comment: random.int(0, 999),
                postAt: random.time()
            }
        )
    }
    res.send(res.body);
});

router.post('/post-comments', function (req, res, next) {
   jwt.require(res);
   let commentsTotal = 5;
   let r = [];
   if (req.body.hasOwnProperty('commentTotal')) {
       commentsTotal = req.body.commentTotal
   }
    res.body['data'] = random.postComments(commentsTotal);
    res.send(res.body)
});

function randPost (mustHaveImage, mustHaveVideo) {
    let image;
    if (mustHaveImage === true) {
        image = random.image()
    } else if (mustHaveImage === false) {
        image = null
    } else {
        image = random.item([null, random.image()])
    }
    let video;
    if (mustHaveVideo === true) {
        video = random.video()
    } else if (mustHaveImage === false) {
        video = null
    } else {
        video = random.item([null, random.video()])
    }
    return {
        text: random.post(),
        video: video,
        avatar: random.avatar(),
        image: image,
        username: random.username(),
        userId: random.userId(),
        postId: random.postId(),
        forward: random.int(0, 999),
        like: random.int(0, 999),
        comment: random.int(0, 999),
        postAt: random.time()
    }
};

router.post('/following-posts', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = [];
    for (let k = 0; k < 5; k ++) {
        res.body['data'].push(randPost())
    }
    res.send(res.body);
});

router.post('/top-posts', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = [];
    for (let k = 0; k < 5; k ++) {
        res.body['data'].push(randPost())
    }
    res.send(res.body);
});

router.post('/latest-posts', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = [];
    for (let k = 0; k < 5; k ++) {
        res.body['data'].push(randPost())
    }
    res.send(res.body);
});

router.post('/forward-post', function (req, res, next) {
    jwt.require(res);
    if (req.body.hasKeys(['postId']) && req.body.postId.isUuid4) {
        res.body['data'] = true;
        res.send(res.body)
    } else {
        throw new Error('请提供一个有效的postId')
    }
});

router.post('/like-post', function (req, res, next) {
    jwt.require(res);
    if (req.body.hasKeys(['postId']) && req.body.postId.isUuid4) {
        res.body['data'] = true;
        res.send(res.body)
    } else {
        throw new Error('请提供一个有效的postId')
    }
});

router.post('/comment-post', function (req, res, next) {
    jwt.require(res);
    if (req.body.hasKeys(['postId', 'comment']) && req.body.postId.isUuid4 &&
        typeof req.body.comment === "string" && req.body.comment.length > 0) {
        res.body['data'] = true;
        res.send(res.body)
    } else {
        throw new Error('请提供一个有效的postId 或/和 评论comment')
    }
});

router.post('/recommend-following', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = [];
    for (let k = 0; k < 30; k++) {
        res.body.data.push(
            {
                username: random.username(),
                userId: random.userId(),
                avatar: random.avatar(),
                isVerified: random.item([true, false])
            }
        )
    }
});

router.post('/top-photos', function (req, res, next) {
    jwt.require(res);
    let total = req.body.total || 10;
    res.body['data'] = [];
    for (let k = 0; k < total; k++) {
        res.body['data'].push(randPost(true, false))
    }
    res.send(res.body)
});

router.post('/top-videos', function (req, res, next) {
    jwt.require(res);
    let total = req.body.total || 10;
    res.body['data'] = [];
    for (let k = 0; k < total; k++) {
        res.body['data'].push(randPost(false, true))
    }
    res.send(res.body)
});

module.exports = router;
