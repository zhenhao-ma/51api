const enforcedRestful = function (req, res, next) {
    if (req.header('Content-Type') === null || req.header('Content-Type') === undefined || !req.header('Content-Type').includes('application/json')) {
        throw new Error('缺少请求头: Content-Type:application/json')
    }
    next();
};

module.exports = enforcedRestful;
