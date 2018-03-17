var express = require('express');
var router = express.Router();

global.IPAddress="";
global.RifName="";
global.Package="";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});
app.get('/enabler', function(req, res) {
  res.sendfile("./html/han_enabler.html");
});
/**
 * Get Current Config
 */
router.get('/config', function(req, res, next) {
  res.json({ipaddress:global.ipaddress,currentPackage=global.package,rifname:global.rifname});
});

router.post('/config', function(req, res, next) {

  if(req.body.ipaddress){
    global.ipaddress=req.body.ipaddress;
  }
  if(req.body.package){
    global.package=req.body.package;
  }
  if(req.body.rifname){
    global.rifname=req.body.rifname;
  }
});
module.exports = router;
