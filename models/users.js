var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	zipcode: {type: Number, required: false},
	totalsaved: {type: Number, required: false},
	numcoupons: {type: Number, required: false},
	savedcoupons: {type: Array, required: false},
	checkoutcoupons: {type: Array, required: false}
});

module.exports = mongoose.model('User', userSchema);