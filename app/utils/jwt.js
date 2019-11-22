let Jwt = require('jsonwebtoken');
let secret = require('../../config/config').jwt.secret;

let jwt = {};

function jwtString (payload, expireIn = '24h') {
    return Jwt.sign(payload,
        secret,
        { expiresIn: expireIn
        }
    );
}

function jwtRequired (res) {
    if (res.locals.jwt === true) {
        return true
    } else {
        throw new Error('缺少正确的JWT Token。请确保已经登陆，然后把返还的jwt token完整地通过请求头 Authorization 发送至后端。')
    }
}

jwt.new = jwtString;
jwt.require = jwtRequired;

module.exports = jwt;
