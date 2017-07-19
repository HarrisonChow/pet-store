'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PetSchema = new Schema({
  breed: {
    type: String,
    Required: 'Kindly enter the breed of the pet'
  },
  age: {
    type: Number,
    Required: 'Kindly enter the age of the pet'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the pet'
  },
  price: {
    type: Number,
    Required: 'Kindly enter the price of the pet'
  },
  list_date: {
    type: Date,
    default: Date.now
  },
  sale_date: {
    type: Date,
  }
});

module.exports = mongoose.model('Pets', PetSchema);
