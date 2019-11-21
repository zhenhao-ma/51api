var express = require('express');
var router = express.Router();
let db = require('../../orm/models');
let usersFn = require('../../orm/models/socialMedia/users');
let reject = require('../../errorHandlers/promiseReturnError');
let users = usersFn(db.sequelize, db.Sequelize);
let Op = db.Sequelize.Op;
const uuidv4 = require('uuid/v4');

router.post('/register', function(req, res, next) {
    let valid = req.body.hasKeys(['username', 'password', 'phone']);
    if (valid) {
        users.create({
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
    } else {
        throw new Error("缺少单个/多个需要的键值: 'username', 'password', 'phone'")
    }
});

router.post('/login', function(req, res, next) {
    let valid = req.body.hasKeys(['usernameOrPhone', 'password']);
    if (valid) {

         users.findAll({
            where: {
                [Op.or]: [
                    { phone: req.body.usernameOrPhone, password: req.body.password},
                    { username: req.body.usernameOrPhone, password: req.body.password},
                ]
            }
        }).then((users) => {
            console.log('users: ', users);
            if (users.length > 0) {
                res.body['data'] = '登陆成功';
                res.send(res.body);
            } else {
                reject(res, '错误的账号或者密码');
            }
        })
    } else {
        throw new Error("缺少单个/多个需要的键值: 'usernameOrPhone', 'password'")
    }
});

module.exports = router;
