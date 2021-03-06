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
const hasKeys = require('../../utils/utils').hasKeys;
const uuidv4 = require('uuid/v4');

router.post('/register', function(req, res, next) {
    let valid = hasKeys(req.body, ['username', 'password', 'phone']);
    if (valid) {
        const uid = uuidv4();
        User.create({
            id: uid,
            phone: req.body.phone,
            username: req.body.username,
            password: req.body.password
        }).then((usr) => {
            if (usr) {
                res.body['data'] = usr;
                res.body['jwttoken'] = jwt.new({id: uid});
                res.send(res.body);
            } else {
                reject(res, '用户创建失败，请检查username, password 和 phone');
            }
        }).catch(err => {
            reject(res, '用户创建失败，请重试')
        })
    }
});

function reformatUserData (userDataFromDb) {
    const plainObject = userDataFromDb.get({ plain: true });
    plainObject['avatar'] = random.avatar();
    return plainObject
}

router.post('/login', function(req, res, next) {
    let valid = hasKeys(req.body, ['usernameOrPhone', 'password']);
    if (valid) {
        User.findAll({
            where: {
                [Op.or]: [
                    { phone: req.body.usernameOrPhone, password: req.body.password},
                    { username: req.body.usernameOrPhone, password: req.body.password},
                ]
            }
        }).then((users) => {
            if (users.length > 0) {
                res.body['data'] = reformatUserData(users[0]);
                res.body['jwttoken'] = jwt.new({id: users[0].id});
                res.send(res.body);
            } else {
                reject(res, '错误的账号或者密码');
            }
        }).catch(err => {
            reject(res, '用户登陆失败，请重试')
        })
    }
});

router.post('/user-info', function(req, res, next) {
    jwt.require(res);
    const userId = res.locals.jwtDecoded.id;
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
    }).catch(err => {
        reject(res, '用户信息获取失败，请重试')
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

router.post('/forgot-password', function(req, res, next) {
    let valid = hasKeys(req.body, ['usernameOrPhone', 'password']);
    // directly update the password of a matched account
    // you should never do this in real world practice
    if (valid) {
        User.findAll({
            where: {
                [Op.or]: [
                    { phone: req.body.usernameOrPhone },
                    { username: req.body.usernameOrPhone },
                ]
            }
        }).then((users) => {
            if (users.length > 0) {
                users[0].update(
                    {
                        password: req.body.password
                    }
                ).then(r => {
                    res.body['data'] = '重置密码成功';
                    res.body['jwttoken'] = jwt.new({id: users[0].id});
                    res.send(res.body);
                }).catch(err => {
                    reject(res, '更新失败');
                });
            } else {
                reject(res, '错误的账号');
            }
        }).catch(err => {
            reject(res, '用户重置密码失败，请重试')
        })
    }
});


router.post('/reset-password', function(req, res, next) {
    let valid = hasKeys(req.body, ['newPassword', 'oldPassword']);
    jwt.require(res);
    const userId = res.locals.jwtDecoded.id;
    // directly update the password of ALL matched account
    // you should never do this in real world practice
    if (valid) {
        User.update(
            {
                password: req.body.newPassword
            },
            {where: { id: userId, password: req.body.oldPassword}}
        ).then((updatedRows) => {
            if (updatedRows[0] > 0) {
                res.body['data'] = '修改密码成功';
                res.send(res.body);
            } else {
                reject(res, '旧密码错误');
            }
        }).catch(err => {
            reject(res, '用户重置密码失败，请重试')
        })
    }
});

module.exports = router;
