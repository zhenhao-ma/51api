const uuidv4 = require('uuid/v4');

String.prototype.isUuid4 = function () {
    let regex = RegExp('^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$\n');
    return regex.test(this)
};
