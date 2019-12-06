let despMapping = require('../../config/config').apiDesp;
const apiDesp = function (req, res, next) {
    // remove the unnecessary /api/ from the path
    const apiPath = req.path.replace('/api/', '/');
    if (!despMapping.hasOwnProperty(apiPath)) {
        throw new Error('这个 ' + req.path + ' Api缺少apiDesp，还未完成。如果你是api的开发者，请找到根目录下的config/config.js添加该api的介绍。如果你单纯是api的使用者，可以稍后再试。')
    }
    res.body = {'code': 1, 'info': 'Api介绍：' + despMapping[apiPath]};
    next()
};

module.exports = apiDesp;
