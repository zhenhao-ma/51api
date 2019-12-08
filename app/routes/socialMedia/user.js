let express = require('express');
let router = express.Router();
let db = require('../../orm/models');
let usersFn = require('../../orm/models/socialMedia/users');
let reject = require('../../errorHandlers/promiseReturnError');
let jwt = require('../../utils/jwt');
let User = usersFn(db.sequelize, db.Sequelize);
let random = require('../../utils/random');
let Op = db.Sequelize.Op;
let socialMediaConfig = require('../../../config/config').app.socialMedia;
const uuidv4 = require('uuid/v4');

router.post('/register', function(req, res, next) {
    let valid = req.body.hasKeys(['username', 'password', 'phone']);
    console.log('valid!', valid);
    if (valid) {
        User.create({
            id: uuidv4(),
            phone: req.body.phone,
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

function reformatUserData (userDataFromDb) {
    const plainObject = userDataFromDb.get({ plain: true });
    plainObject['avatar'] = random.avatar();
    return plainObject
}

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
                res.body['data'] = reformatUserData(users[0]);
                res.body['jwttoken'] = jwt.new({id: users[0].id});
                res.send(res.body);
            } else {
                reject(res, '错误的账号或者密码');
            }
        })
    }
});

router.post('/user-info', function(req, res, next) {
    jwt.require(res);
    const userId = res.locals.jwtDecoded.id;
    console.log('the userID: ', userId);
    User.findAll({
        where: {
            id: userId
        }
    }).then((users) => {
        if (users.length > 0) {
            res.body['data'] = reformatUserData(users[0]);
            res.send(res.body);
        } else {
            reject(res, '无匹配的用户信息');
        }
    })
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

router.post('/logout', function (req, res, next) {
    jwt.require(res);
    res.body['data'] = true;
    res.send(res.body);
});

module.exports = router;
