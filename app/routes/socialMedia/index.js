let UserRouter = require('./user');
let TrendingRouter = require('./trending');
let PostRouter = require('./post');
let FollowRouter = require('./follow');

module.exports = [
    UserRouter,
    TrendingRouter,
    PostRouter,
    FollowRouter
];
