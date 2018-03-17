var express = require('express');
var router = express.Router();
var path = require("path");

global.IPAddress="";
global.Package="";
global.Table={};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});
/* PS3Xplot 3.0 HAN, Statics Files */
router.get('/enabler', function(req, res) {
  res.sendFile('han_enabler.html', { root: path.join(__dirname, '../html')});
});
router.get('/installer', function(req, res) {
  res.sendFile('han_installer.html', { root: path.join(__dirname, '../html')});
});
router.get('/dumper', function(req, res) {
  res.sendFile('actidps_dumper.html', { root: path.join(__dirname, '../html')});
});
router.get('/debugpkg', function(req, res) {
  res.sendFile('dbgpkg_enabler.html', { root: path.join(__dirname, '../html')});
});
/* PS3Xplot 3.0 HAN, Dynamics Files */
router.get('/injecter', function(req, res) {
  res.render('actrif_copier',{rifname:global.Table[global.Package]});
});
/**
 *  Configs
 */
router.get('/config', require('./backend/config.js').GetterConfiguration);

router.post('/config', require('./backend/config.js').SetterConfiguration);

router.get('/table', require('./backend/config.js').GetterTable);

router.post('/table', require('./backend/config.js').SetterTable);


module.exports = router;