var express = require('express');
var router = express.Router();
var path = require("path");



  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });
  router.get('/index', function(req, res, next) {
    res.render('index');
  });
  /* PS3Xplot 3.0 HAN, Statics Files */
  router.get('/enabler', function(req, res) {res.sendFile('han_enabler.html', { root: path.join(__dirname, '../etHANol/html/')});});
  router.get('/installer', function(req, res) {res.sendFile('han_installer.html', { root: path.join(__dirname, '../etHANol/html/')});});
  router.get('/dumper', function(req, res) { res.sendFile('actidps_dumper.html', { root: path.join(__dirname, '../etHANol/html/')});});
  router.get('/debugpkg', function(req, res) {res.sendFile('dbgpkg_enabler.html', { root: path.join(__dirname, '../etHANol/html/')});});
  /* PS3Xplot 3.0 HAN, Dynamics Files */
  router.get('/injecter', function(req, res) {res.render('actrif_copier',{rifname:global.Table[global.Package]});});
  router.get('/injecter_auto', function(req, res) {res.render('actrif_copier_auto',{rifname:global.Table[global.Package]});});
  /* Reverse Proxy */
  router.get('/GetPackage/*',require("./frontend/getPackage").PackageDownloader);
  router.get('*/icons/*',require("./frontend/getPackage").ImageDownloader);
  router.get('*.pkg',require("./frontend/getPackage").PackageDownloader);

module.exports = router;