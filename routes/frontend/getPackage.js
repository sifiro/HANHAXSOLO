
var express = require('express');
var router = express.Router();
var path = require("path");
var httpProxy = require('http-proxy');

exports.PackageDownloader = function(req,res,next){
    var proxy = httpProxy.createProxyServer();

    var pkg = req.url.split("/");
    pkg = pkg[pkg.length-1];
    global.Package=pkg;
    proxy.web(req, res, {
        target: 'http://'+global.IPAddress+"/"+pkg,
        ignorePath:true
      });
}