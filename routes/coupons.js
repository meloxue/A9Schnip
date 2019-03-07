var data = require('../data.json');
var data_cat = require('../data_cat.json');
var data_expire = require('../data_expire.json');
var data_bar = require('../data_bar.json');
var finalcheckout = require('../finalcheckout.json');
var barss = {
  barcode: ['./images/loyalty_card.jpg']
};

exports.chicken = function(req, res) { 
	res.render('chicken', data);
};
exports.beef = function(req, res) { 
	res.render('beef', data);
};
exports.fish = function(req, res) { 
	res.render('fish', data);
};
exports.beverage = function(req, res) { 
	res.render('beverage', data);
};
exports.snack = function(req, res) { 
	res.render('snack', data);
};
exports.other = function(req, res) { 
	res.render('other', data);
};

exports.couponsbar= function(req, res) { 
	res.render('checkout');
};
exports.couponscodes= function(req, res) { 
	res.render('barcodes', barss);
	console.log("get bar");

};


exports.couponsRen= function(req, res) {
	var codebar = req.body.codebar;
	console.log("barcode");

	barss.barcode.push(codebar);
	console.log("pushed bar");
	//response.render('rsvp' , data);
	res.render('barcodes', barss);



};

exports.clearBarss = function(req, res) {
	barss = {
   barcode: ['./images/loyalty_card.jpg']
   };

 res.render('barcodes', barss);
 console.log("clear barcodes");
};
