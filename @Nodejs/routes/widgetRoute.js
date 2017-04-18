'use strict';

// http://expressjs.com/en/guide/routing.html#express-router
var express = require('express');
var router = express.Router();

var daMongo = require('../models/_daMongo');
var daMongoConnection = daMongo();

var Widget = require('../models/widgetModel');


// TODO: Change this from a "get" to a "post" http verb -- for now keep the "get" to make it easier to develop/test with. Obviously don't name it post.
// https://mlab.com/databases/nglist/collections/widgets
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/post/hairdryer  ==>  "You created 'blah' in mongo database"
router.get('/post/:name', function (req, res) {
  
  var widget = new Widget({ name: req.params.name });
  widget.save(function(err) {
    if (err) {
      console.error(err);
    } else {
      //console.log(`Success! Saved '${req.params.name}' to mongo database`);
      console.log(`Success! Saved '${widget.toString()}' to mongo database`);
    }
  });
  
  //res.status(201).send(`You created '${req.params.name}' in mongo database`);
  res.status(201).send(`You created '${widget.toString()}' in mongo database`);
  
});


function find(req, res, name) {
  Widget.find(name, function(err, widgets) {
    if (err) {
      console.log(`Find returns an error= ${err}`);
    } else {
      console.log('widgets found', widgets);
      res.status(200).send(widgets);
    }
  });
}

// https://mlab.com/databases/nglist/collections/widgets
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/find/a  ==>  { dump of everything it finds in mongo }
router.get('/find/:name', function (req, res) {
  //find(req, res, {name: /ball/});
  var regex = new RegExp(req.params.name, "i");
  //find(req, res, {name: /req.params.name/});
  find(req, res, {name: regex});
});

// https://mlab.com/databases/nglist/collections/widgets
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/find  ==>  { dump of everything in mongo }
router.get('/find', function (req, res) {
  find(req, res, {});
});



module.exports = router;
