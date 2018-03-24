
var express = require('express');
var path = require("path");
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

exports.PackageDownloader = function(req,res,next){

    var pkg = req.url.split("/");
    pkg = pkg[pkg.length-1];
    global.Package=decodeURI(pkg);
    proxy.web(req, res, {
        target: 'http://'+global.IPAddress+"/"+pkg,
        ignorePath:true
      });
}

exports.ImageDownloader = function(req,res,next){
    var icon = req.url.split("/");
    icon = icon[icon.length-1];
    global.Package=decodeURI(icon);
    proxy.web(req, res, {
        target: 'http://'+global.IPAddress+"/icons/"+icon,
        ignorePath:true
      });
}