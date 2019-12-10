let express = require('express');
let path = require('path');
let prototypeModification = require('./utils/prototypeModification');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

let routers = require('./routes');
// let usersRouter = require('./routes/socialMedia/users');

let app = express();
app.options('*', cors()); // enable pre-flight across-the-board
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middlewares
let middlewares = require('./middlewares/index');
app.use(middlewares);


// routes
routers.forEach(routerObj => {
    app.use(routerObj.path, routerObj.router);
});


// error handler at last
let errorHandlers = require('./errorHandlers/index');
app.use(errorHandlers);

module.exports = app;
