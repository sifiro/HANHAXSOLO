var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
// Parameters Globals
global.IPAddress="";
global.Package="";
global.Table={};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var configfile=JSON.parse(require("fs").readFileSync("./config.json"));
if(configfile.IPAddress&&configfile.IPAddress!=""){
  global.IPAddress=configfile.IPAddress;
}
if(configfile.standalone){
  configfile.url.push("/");
}
var index=require('./routes/index');
var config=require('./routes/config');
for(var element in configfile.url){
  app.use(configfile.url[element],express.static(path.join(__dirname, 'etHANol/html/')));
  app.use(configfile.url[element], index);
}
app.use("/",config);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  err.status = 404;
  res.json({"status":"404",originalUrl:req.originalUrl,"description":err.message});

});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({"status":"FAIL",originalUrl:req.originalUrl,"description":err.message
,errorcode:err.status,"description":err.message});
});

module.exports = app;
