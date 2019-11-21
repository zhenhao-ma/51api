function promiseReturnError (res, err) {
    res.body['error'] = err;
    res.body['code'] = 0;
    res.send(res.body)
}

module.exports = promiseReturnError;
