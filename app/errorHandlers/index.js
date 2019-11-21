module.exports = function errorHandler (err, req, res, next) {
    console.log('[ERROR]: ', err.stack);
    console.log('err: ', err);
    res.status(200).send({code: 0, error: err.message})
};
