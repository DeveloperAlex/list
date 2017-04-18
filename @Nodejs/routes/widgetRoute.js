'use strict';

// http://expressjs.com/en/guide/routing.html#express-router
var express = require('express');
var router = express.Router();

var daMongo = require('./_daMongo');
var daMongoConnection = daMongo();



// TODO: Change this from a "get" to a "post" http verb -- for now keep the "get" to make it easier to develop/test with.
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/post/hairdryer  ==>  "You created 'blah' in mongo database"
router.get('/post/:name', function (req, res) {
  
  res.status(201).send(`You created '${req.params.name}' in mongo database`);
});



module.exports = router;
