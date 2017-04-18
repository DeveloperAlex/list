'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//---------------------------------------------------------
var widgetSchema = new Schema({
  name: {type: String, index: true},
  description: {type: String},
  color: {type: String},
  price: {type: Number, index: true},
  date: { type: Date, default: Date.now },
});

// middleware
widgetSchema.pre('save', function (next) {
  console.log(`About to save: ${this.get('name')}`);
  next();
});


var widgetModel = mongoose.model('Widget', widgetSchema);  // Mongoose will create the model for your widgets collection, not your widget collection.


module.exports = widgetModel;
