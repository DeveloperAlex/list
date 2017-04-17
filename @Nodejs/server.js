'use strict';
// https://devcenter.heroku.com/articles/mean-apps-restful-api
// nodemon (vs pm2)
// https://github.com/DeveloperAlex/Orders/blob/master/OrdersExpressSvc/server.js


var express = require("express");
var app = express();
var cors = require("cors");  //https://github.com/expressjs/cors
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
app.use(bodyParser.json());


app.use(cors());
// OPTIONS verb needs to be handled too (for CORS - preflight requests).
// app.use(function(req, res, next) {  //Perhaps this would be better - than adding a cors npm module (above).
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
//   if (req.method === 'OPTIONS') {
//     return res.send(200);
//   } else {
//     return next();
//   }
// });


// ########## ROUTES ##############################################################################
// app.use('/static', express.static(path.join(__dirname, 'public')));  // Currently using "ng serve" for the Angular side. Later switch to node.js serving up the Angular files. // http://expressjs.com/en/starter/static-files.html

// Log bad requests. Note: Code needs improvement - "apiii" passes approved check. Fix later when have time.
app.use(function (req, res, next) {
  // if (req.originalUrl.indexOf('/api') > -1) {
  var approved = ['api','birds','testing'].some( function(element, index, array){ return ( req.originalUrl.indexOf(element) > -1 ); } );
  if (approved) {
    console.log('%s ==> %s %s %s', (new Date()).toGMTString(), req.method, req.url, req.path);
    next();
  } else {
    console.log('==BAD== %s ==> %s %s %s', (new Date()).toGMTString(), req.method, req.url, req.path);
    // res.status(404).send("No way...");
    res.end();  // Die silently.
  }
});

// Below works for: https://ng2-list-001-nodejs-developeralex.c9users.io/
app.get('/testing', function (req, res, next) {
  res.json({msg: 'Yippy - node.js express restful service is running.'})
})

var apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

var birds = require('./routes/birds');
app.use('/birds', birds);

// https://ng2-list-001-nodejs-developeralex.c9users.io/asdf
app.use(function (req, res, next) {
  res.status(404).send("Sorry...");
});
// ########## ROUTES ##############################################################################


// var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//var server = app.listen(8082, process.env.IP || "0.0.0.0", function(){
var server = app.listen(8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  // console.log("Node.js Express RESTful server listening at", addr.address + ":" + addr.port);
  console.log(`Node.js Express RESTful server listening at ${addr.address}:${addr.port} on ${(new Date()).toGMTString()}`);
});
