var mongoose = require('mongoose');
var schema = mongoose.Schema;

var clientSchema = new schema({
   name: {type: String},
   email: { type: String },
   genre: { type: String, enum: ['male', 'female']}
});

module.exports = mongoose.model('Client', clientSchema);