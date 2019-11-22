const uuidv4 = require('uuid/v4');

Object.prototype.hasKeys = function (keys) {
    if (Array.isArray(keys)) {
        for (let k = 0; k < keys.length; k++) {
            if (!this.hasOwnProperty(keys[k])) {
                throw new Error('缺少键值对：' + keys[k]);
            }
        }
        return true
    }
};

String.prototype.isUuid4 = function () {
    let regex = RegExp('^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$\n');
    return regex.test(this)
};
