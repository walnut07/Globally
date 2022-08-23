const mongoose = require('mongoose');

const DatesSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  token: {type: String, required: true, unique: true},
  savedDates: [{type: Date}]
  
});

module.exports = mongoose.model('Dates', DatesSchema);