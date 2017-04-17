// http://expressjs.com/en/guide/routing.html#express-router
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// https://ng2-list-001-nodejs-developeralex.c9users.io/birds
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
});

// https://ng2-list-001-nodejs-developeralex.c9users.io/birds/about
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
});

module.exports = router;
