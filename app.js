var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var logger = require('morgan');

var usersRouter = require('./routes/index');
var logbots = require('./routes/botsRoutes');
var interaction = require('./routes/interactionRoutes');

var app = express();

app.use(cors())
// view engine setup

const nodb = require("./models");

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['DAWM']}))
app.use(express.static(path.join(__dirname, 'public')));

nodb.mongoose.connect(nodb.url,config)
.then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


//app.use('/users', usersRouter);
app.use('/',usersRouter);
app.use('/interactions',interaction);
app.use('/api/bot',logbots);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
