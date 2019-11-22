var express = require('express');
var router = express.Router();
let db = require('../../orm/models');
let usersFn = require('../../orm/models/socialMedia/users');
let reject = require('../../errorHandlers/promiseReturnError');
let jwt = require('../../utils/jwt');
let User = usersFn(db.sequelize, db.Sequelize);
let Op = db.Sequelize.Op;
let socialMediaConfig = require('../../../config/config').app.socialMedia;
let random = require('../../utils/random');
const uuidv4 = require('uuid/v4');

router.post('/register', function(req, res, next) {
    let valid = req.body.hasKeys(['username', 'password', 'phone']);
    if (valid) {
        User.create({
            id: uuidv4(),
            phone: req.body.name,
            username: req.body.username,
            password: req.body.password
        }).then((usr) => {
            if (usr) {
                res.body['data'] = usr;
                res.send(res.body);
            } else {
                reject(res, '用户创建失败，请检查username, password 和 phone');
            }
        })
    }
});

router.post('/login', function(req, res, next) {
    let valid = req.body.hasKeys(['usernameOrPhone', 'password']);
    if (valid) {
        User.findAll({
            where: {
                [Op.or]: [
                    { phone: req.body.usernameOrPhone, password: req.body.password},
                    { username: req.body.usernameOrPhone, password: req.body.password},
                ]
            }
        }).then((users) => {
            // console.log('users: ', users);
            if (users.length > 0) {
                res.body['data'] = '登陆成功';
                res.body['jwttoken'] = jwt.new({id: users[0].id});
                res.send(res.body);
            } else {
                reject(res, '错误的账号或者密码');
            }
        })
    }
});

router.post('/unread-notification-number', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = Math.floor(Math.random() * 100);
    res.send(res.body);
});

router.post('/all-notifications', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = socialMediaConfig.user.notification;
    res.send(res.body);
});

router.post('/user-posts', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = [];
    for (let k = 0; k < 5; k ++) {
        res.body['data'].push(
            {
                text: random.post(),
                video: random.item([null, random.video()])
            }
        )
    }
    res.send(res.body);
});



module.exports = router;
