const hasKeys = function (_obj, keys) {
    if (Array.isArray(keys)) {
        for (let k = 0; k < keys.length; k++) {
            if (!_obj.hasOwnProperty(keys[k])) {
                throw new Error('缺少键值对：' + keys[k]);
            }
        }
        return true
    }
    return false
};


module.exports = { hasKeys };
