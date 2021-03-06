'use strict';

// http://expressjs.com/en/guide/routing.html#express-router
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var daMongo = require('../models/_daMongo');
var daMongoConnection = daMongo();

var Widget = require('../models/widgetModel');


// ------------------------------------------------------------------------------------------------

// TODO: Change this from a "get" to a "post" http verb -- for now keep the "get" to make it easier to develop/test with. Obviously don't name it post.
// https://mlab.com/databases/nglist/collections/widgets
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/post/hairdryer  ==>  "You created 'blah' in mongo database"
router.get('/post/:name', function (req, res) {
  var widget = new Widget({ name: req.params.name });
  widget.save(function(err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      console.log(`Success! Saved '${widget.toString()}' to mongo database`);
      res.status(201).send(`You created '${widget.toString()}' in mongo database`);
    }
  });
});

// ------------------------------------------------------------------------------------------------

// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/put/oldname/newname
router.get('/put/:orig_name/:new_name', function (req, res) {
  Widget.find({name:req.params.orig_name}).exec(function(err, widgets) {
    if (err) {
      console.error(`Find returns an error= ${err}`);
      res.status(500).send(err);
    } 

    if (widgets.length === 1) {
      var widget = widgets[0];
      console.log('Updating orig_name', widget);
      _.merge(widget, {name:req.params.new_name});  // Better for if we update multiple - not just name.
      console.log('Updating new_name', widget);

      widget.save(function(err) {
        if (err) {
          res.status(500).json({info: 'error during update', error: err});
        };
        // res.status(200).json({info: 'Success updating name from '});
        res.status(200).json({info: `Success updating name from '${req.params.orig_name}' to '${req.params.new_name}'`});
      });
      
    } else {
      res.status(404).json({info: 'Put encountered a problem'});
    }

  });
  
});

// ------------------------------------------------------------------------------------------------

// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/delete/asdf
router.get('/delete/:name', function (req, res) {
  Widget.find({name:req.params.name}).exec(function(err, widgets) {
    if (err) {
      console.error(`Find returns an error= ${err}`);
      res.status(500).send(err);
    } 

    if (widgets.length === 1) {
      var widget = widgets[0];
      console.log('Deleting', widget);
      
      Widget.findByIdAndRemove(widget._id, function(err) {
        if (err) {
          res.status(500).json({info: 'error during delete', error: err});
        };
        res.status(200).json({info: 'Success deleting'});
      });
      
    } else {
      res.status(404).json({info: 'Delete encountered a problem'});
    }

  });
      
});

// ------------------------------------------------------------------------------------------------

function find(req, res, name) {
  Widget.find(name).sort({name: 'asc'}).limit(100).exec(function(err, widgets) {
    if (err) {
      console.error(`Find returns an error= ${err}`);
      res.status(500).send(err);
    } 
    
    if (widgets.length > 0) {
      console.log('widgets found', widgets);
      res.status(200).send(widgets);
    } else {
      res.status(404).json({info: 'None found'});
    }

  });
}

// https://mlab.com/databases/nglist/collections/widgets
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/find/a  ==>  { dump of everything it finds in mongo }
router.get('/find/:name', function (req, res) {
  var regex = new RegExp(req.params.name, "i");
  find(req, res, {name: regex});

  // Another way to do case-insensitive searches in Mongo (only in newer versions):  
  // find(req, res, { $text: { $search: req.params.name, $caseSensitive: false, $diacriticSensitive:false } });  // https://docs.mongodb.com/manual/reference/operator/query/text/#text
});

// https://mlab.com/databases/nglist/collections/widgets
// https://ng2-list-001-nodejs-developeralex.c9users.io/api/widget/find  ==>  { dump of everything in mongo }
router.get('/find', function (req, res) {
  find(req, res, {});
});

// ------------------------------------------------------------------------------------------------

module.exports = router;
