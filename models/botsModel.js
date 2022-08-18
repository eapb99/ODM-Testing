var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var botsSchema = new Schema({
	'robotid' : String,
	'name' : String
});

module.exports = mongoose.model('bots', botsSchema);
