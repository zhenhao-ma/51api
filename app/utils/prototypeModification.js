
Object.prototype.hasKeys = function (keys) {
    console.log('keys: ', keys);
    if (Array.isArray(keys)) {
        for (let k = 0; k < keys.length; k++) {
            if (!this.hasOwnProperty(keys[k])) {
                throw new Error('缺少键值对：' + keys[k]);
            }
        }
        return true
    }
};
