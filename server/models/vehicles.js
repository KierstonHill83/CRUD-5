var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vehicle = new Schema({
  make: String,
  model: String,
  year: Number
});

mongoose.connect('mongodb://localhost/vehicles');

module.exports = mongoose.model('vehicles', Vehicle);