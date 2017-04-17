'use strict';

// http://expressjs.com/en/guide/routing.html#express-router
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// https://ng2-list-001-nodejs-developeralex.c9users.io/api/bird/
router.get('/', function (req, res) {
  res.send('Birds home page');
});

// https://ng2-list-001-nodejs-developeralex.c9users.io/api/bird/about
router.get('/about', function (req, res) {
  res.send('About birds');
});

// https://ng2-list-001-nodejs-developeralex.c9users.io/api/bird/count/21  ==>  "You see 21 birds"
router.get('/count/:num', function (req, res) {
  res.send(`You see ${req.params.num} birds`);
});

module.exports = router;
