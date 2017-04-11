'use strict';
// https://devcenter.heroku.com/articles/mean-apps-restful-api
// nodemon (vs pm2)

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
app.use(bodyParser.json());



// var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
var server = app.listen(8082, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Node.js Express RESTful server listening at", addr.address + ":" + addr.port);
});

