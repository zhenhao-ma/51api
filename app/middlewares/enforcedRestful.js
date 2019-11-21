const enforcedRestful = function (req, res, next) {
    if (!req.header('Content-Type').includes('application/json')) {
        throw new Error('Missing Request Header: Content-Type:application/json')
    }
    next();
};

module.exports = enforcedRestful;
