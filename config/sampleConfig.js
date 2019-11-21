module.exports = {
    apiDesp: {
        '/users/register': '这个Api是为了给你学习如何进行新建用户的。' +
            '并且这个Api并没有要求提供短信/邮箱认证，你可以在别的Api中学习这些实际操作。' +
            '另外这个Api会把用户注册完毕之后的信息（包括密码）全部返还给你，' +
            '这个在实际工作中应该避免。正常来说返回一个已登陆token就好。',
        '/users/login': '这是一个登陆Api，只要账号（手机或者用户名）和密码匹配了之后，就会返回登陆成功的字样。如果你无法登陆，可以进行重新注册。后台是允许您多次重复进行注册的，毕竟只是供学习开发使用。登陆之后会给你返还一个登陆token，并且也会在cookie中给你增加access token。在实际操作中，你应该尽量使用cookie的，而尽量避免使用data中的token。后续在你每次发送请求的时候，都应该考虑附带上token给后端Api作为登陆凭证。如果你把data中的token保存到了localStorage或其它本机位置，你都应该在用户退出的时候进行清理。'
    },
    staticResponseEntry: {
        contributors: ['ZhenhaoMa'],
        officialWebsite: 'https://www.com',
        environment: ['node.js', 'express'],
        version: 'v1.0',
        lastUpdatedAt: '2019-11-20'
    },
    mySql: {
        development: {
            "username": "asdjfpoajdsfpafd",
            "password": "asdjfpoajdsfpafd",
            "database": "asdjfpoajdsfpafd",
            "host": "asdjfpoajdsfpafd",
            "port": 1111,
            "dialect": "mysql"
        },
        test: {
            "username": "asdjfpoajdsfpafd",
            "password": "asdjfpoajdsfpafd",
            "database": "asdjfpoajdsfpafd",
            "host": "asdjfpoajdsfpafd",
            "port": 1111,
            "dialect": "mysql"
        },
        production: {
            "username": "asdjfpoajdsfpafd",
            "password": "asdjfpoajdsfpafd",
            "database": "asdjfpoajdsfpafd",
            "host": "asdjfpoajdsfpafd",
            "port": 1111,
            "dialect": "mysql"
        }
    }
};
