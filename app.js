var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true, useUnifiedTopology: true});




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mobilePhonesRouter = require('./routes/mobilePhones');
var starsRouter = require('./routes/stars');
var slotRouter = require('./routes/slot');
var MobilePhone = require('./models/mobilePhone');
var resourceRouter = require('./routes/resource');
// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await MobilePhone.deleteMany();
  let instance1 = new MobilePhone({brand:"Iphone", model:'SE',cost:500, color:"Black"});
 let instance2 = new MobilePhone({brand:"OnePlus", model:'8',cost:300, color:"Blue"});
let instance3 = new MobilePhone({brand:"Samsung", model:'S5',cost:400, color:"White"});
let instance4 = new MobilePhone({brand:"MI", model:'POCO',cost:200, color:"Gold"});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  instance2.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Second object saved")
    });
    instance3.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("Third object saved")
      });
      instance4.save( function(err,doc) {
        if(err) return console.error(err);
        console.log("Fourth object saved")
        });
  }
  let reseed = true;
  if (reseed) { recreateDB();}
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mobilePhones', mobilePhonesRouter);
app.use('/stars', starsRouter);
app.use('/slot', slotRouter);
app.use('/resource', resourceRouter);

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

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")
});

module.exports = app;
