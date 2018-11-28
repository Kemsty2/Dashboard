const express = require('express');
const {join} = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const {json, urlencoded} = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
require('dotenv/config');
const exphbs = require('express-handlebars');
const helpers = require('./helpers');

const index = require('./routes/index');
const users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    helpers: helpers,
    partialsDir: 'views/partials/',
    layoutsDir: 'views/layouts/',
  })
);
app.set('view engine', 'hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 180 * 60 * 1000 },
  })
);
app.use(flash());

app.use('/', index);
app.use('/users', users);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;
