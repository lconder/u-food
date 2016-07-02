var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Order = new Schema({
	name: String,	
	description: String,	
	price: Number,
	status: Number,
});

mongoose.model('order', Order);
//mongoose.connect('mongodb://lconder:novidosN0!@ds040489.mlab.com:40489/ufood');
mongoose.connect('mongodb://localhost/ufood');