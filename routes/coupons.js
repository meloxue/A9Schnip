var data = require('../data.json');
var data_cat = require('../data_cat.json');
var data_expire = require('../data_expire.json');
var data_bar = require('../data_bar.json');
var finalcheckout = require('../finalcheckout.json');

exports.chicken = function(req, res) { 
	res.render('chicken', data);
}
exports.beef = function(req, res) { 
	res.render('beef', data);
}
exports.fish = function(req, res) { 
	res.render('fish', data);
}
exports.beverage = function(req, res) { 
	res.render('beverage', data);
}
exports.snack = function(req, res) { 
	res.render('snack', data);
}
exports.other = function(req, res) { 
	res.render('other', data);
}
/*
exports.couponslist = function(req, res) { 
	res.render('couponjson', data);
}
exports.couponscata = function(req, res) { 
	res.render('coupon_cat', data_cat);
}
exports.couponsexp= function(req, res) { 
	res.render('coupon_expire', data_expire);
}
*/
exports.couponsbar= function(req, res) { 
	res.render('checkout', data_bar);
}
exports.couponscodes= function(req, res) { 
	res.render('barcodes', data_bar);
}

