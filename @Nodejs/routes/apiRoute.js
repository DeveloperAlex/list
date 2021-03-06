'use strict';

// https://github.com/DeveloperAlex/Orders/blob/master/OrdersExpressSvc/server/routes/apiRoutes.js
// https://github.com/DeveloperAlex/Orders/blob/master/OrdersExpressSvc/server/routes/apiRoutes.js
// https://github.com/DeveloperAlex/Orders/blob/master/OrdersExpressSvc/server/routes/apiRoutes.js


// var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //Middleware that creates req.body from either json or url.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var router = express.Router({  // https://expressjs.com/en/4x/api.html#express.router
  mergeParams: true
});


// Works - https://ng2-list-001-nodejs-developeralex.c9users.io/api/ping
router.get('/ping', function(req, res) {
  res.json({pong: Date.now()});
});



var daMongo = require('../models/_daMongo');
var daMongoConnection = daMongo();



/*
///////////////////////////////////////////////////////////////////////////////////////////////////
// <Mongoose>
///////////////////////////////////////////////////////////////////////////////////////////////////


// var passwords = require('../passwords');
// var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
// mongoose.set('debug', true);
// var db = mongoose.connect(passwords.mlab_com_list, function(err) {  //https://mongolab.com/databases/orders
//   if (err) {
//     console.log('Mongoose connect failed. err= ' + err);
//   }
// });


var passwords = require('../_passwords');
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
mongoose.set('debug', true);


var pw = passwords.passwords.mlab_com_list;
console.log(`passwords.mlab_com_list= ${pw}`);
// var db = mongoose.connect(passwords.mlab_com_list, function(err) {  //https://mongolab.com/databases/orders
// var db = mongoose.connect("mongodb://user:pw@ds145369.mlab.com:45369/nglist", function(err) {  //https://mongolab.com/databases/orders
var db = mongoose.connect(pw, function(err) {  //https://mongolab.com/databases/orders
  if (err) {
    console.log('Mongoose connect failed. err= ' + err);
  }
});


mongoose.connection.on('connected', function () {
  console.log('Mongoose connection opened');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

function gracefulExit() {
  mongoose.connection.close(function () {
    //console.log('Mongoose connection closed because of app termination: SIGINT, SIGTERM, or SIGUSR2 (which nodemon sends on restart).');
    console.log('Mongoose connection closed because of app termination: SIGINT or SIGTERM.');
    process.exit(0);
  });
}
//process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit).on('SIGUSR2', gracefulExit);  // If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit); // If the Node process ends, close the Mongoose connection


// For nodemon restarts. Sadly this doesn't appear to be working. Despite code coming from here: https://github.com/remy/nodemon/blob/e9d85b2afd55604b416a65eefe2653c7b1af0907/README.md#controlling-shutdown-of-your-script
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through: ' + msg);
    callback();
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// </Mongoose>
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

module.exports = router;
