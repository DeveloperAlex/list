'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');  // https://www.npmjs.com/package/mongoose-unique-validator // Better than 1100 error: https://docs.mongodb.com/manual/core/index-unique/

//---------------------------------------------------------
// validators:
var descriptionValidator = [
  function(val) {
    return (val.trim().length >= 3);
  },
  'Description must be at least 3 characters long'
];

//---------------------------------------------------------
// schema:
var widgetSchema = new Schema({
  name:        { type: String, index: true, unique: true, required: true, uniqueCaseInsensitive: true, trim: true },  // https://www.npmjs.com/package/mongoose-unique-validator
  description: { type: String, trim: true, validate: descriptionValidator },
  color:       { type: String, trim: true },  // required: true, default: 'white', enum: ['red', 'white', 'blue']
  price:       { type: Number, min: 0 },
  quantity:    { type: Number },
  tags: {
    tag: { type: String, trim: true }
  }
}, {timestamps: true});

//---------------------------------------------------------
// plugins:
widgetSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

//---------------------------------------------------------
// middleware:
widgetSchema.pre('validate', function(next) {  //http://mongoosejs.com/docs/api.html#model_Model-save
  console.log('Validating...');  //Added in case I want to debug/inspect "this".
  next();
});

widgetSchema.pre('save', function (next) {
  console.log(`About to save: ${this.get('name')}`);
  next();
});

//---------------------------------------------------------
// methods:
widgetSchema.methods.toString = function() {
  return `{ name: "${this.name}" }`;
};

//---------------------------------------------------------
// model:
var widgetModel = mongoose.model('Widget', widgetSchema);  // Mongoose will create the model for your widgets collection, not your widget collection.

widgetModel.on('index', function (error) {
  if (error) {  //If error is truthy, index build failed
    console.log('widgetModel index error', error);
  } else {
    console.log('widgetModel index success');
  }
});

widgetModel.schema.options.emitIndexErrors; // true  //http://mongoosejs.com/docs/guide.html#emitIndexErrors
widgetModel.on('error', function(error) {
  // gets an error whenever index build fails
  console.log('widgetModel index detail error', error);
});

//---------------------------------------------------------

module.exports = widgetModel;
