var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var interactionSchema = new Schema({
	'robotid' : String,
	'message' : String,
	'hour' : String
});

module.exports = mongoose.model('interaction', interactionSchema);
