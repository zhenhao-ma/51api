let express = require('express');
let path = require('path');
let utils = require('./utils/utils');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let routers = require('./routes');
// let usersRouter = require('./routes/socialMedia/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middlewares
let middlewares = require('./middlewares/index');
app.use(middlewares);


// routes
routers.forEach(routerObj => {
    console.log('routerObj: ', routerObj);
    app.use(routerObj.path, routerObj.router);
});
// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// error handler at last
let errorHandlers = require('./errorHandlers/index');
app.use(errorHandlers);

module.exports = app;
