let jwt = require('jsonwebtoken');
const config = require('../../config/config.js').jwt;

const validateJwt = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (typeof token === "string" && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    // save the jwt status inside the req locals
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            res.locals.jwt = !err;
        });
    } else {
        res.locals.jwt = false;
    }
    next();
};

module.exports = validateJwt;
