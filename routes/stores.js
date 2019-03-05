var data = require('../data.json');

var data1 = {
  rsvp: ['ixd@ucsd.edu']
};

exports.maininfo = function(req, res) { 
	res.render('main',)//'sprouts','vons',)
}
exports.mainbinfo = function(req, res) { 
	res.render('mainb',)//'sprouts','vons',)
}
exports.nineinfo = function(req, res) { 
	res.render('99ranch',)//'sprouts','vons',)
}
exports.ralphinfos = function(req, res) { 
	res.render('ralph',)//'sprouts','vons',)
}
exports.walinfo = function(req, res) { 
	res.render('walmart',)//'sprouts','vons',)
}
exports.sprinfo = function(req, res) { 
	res.render('sprouts',)//'sprouts','vons',)
}
exports.vonsinfo = function(req, res) { 
	res.render('vons',)//'sprouts','vons',)
}
exports.cosinfo = function(req, res) { 
	res.render('costco',)//'sprouts','vons',)
}
exports.cvsinfo = function(req, res) { 
	res.render('cvs',)//'sprouts','vons',)
}
exports.trinfo = function(req, res) { 
	res.render('traderjoes',)//'sprouts','vons',)
}
exports.zioninfo = function(req, res) { 
	res.render('zionmarket',)//'sprouts','vons',)
}
exports.albertinfo = function(req, res) { 
	res.render('albertsons',)//'sprouts','vons',)
}
exports.foodinfo = function(req, res) { 
	res.render('food4less',)//'sprouts','vons',)
}
exports.pavinfo = function(req, res) { 
	res.render('pavillions',)//'sprouts','vons',)
}
exports.wholeinfo = function(req, res) { 
	res.render('wholefoods',)//'sprouts','vons',)
}
exports.northinfo = function(req, res) { 
	res.render('northgate',)//'sprouts','vons',)
}
exports.swapinfo = function(req, res) { 
	res.render('swapmain',)//'sprouts','vons',)
}

exports.loyalinfo = function(req, res) { 
	res.render('addcard-b',)//'sprouts','vons',)
}

/* var finalcheckout = require('../finalcheckout.json');

var alaska_track = 'un';
var baconwrapped_track = 'un';
var breadedchicken_track = 'un';
var buddinglunch_track = 'un';
var chickenbreast_track = 'un';
var cookedentrees_track = 'un';
var cornishhens_track = 'un';
var fillet_track = 'un';
var flatiron_track = 'un';
var grassbeef_track = 'un';


function alaskaChange(){
	var image = document.getElementById('alaska');
	
	if(alaska_track=='un'){
		image.src='images/alaska_pressed.png';
		alaska_track='pr';	

	}else{
		image.src='images/alaska_unpressed.png';
		alaska_track='un';
	}
 }

function baconwrappedChange(){
	var image = document.getElementById('baconwrapped');
	
	if(baconwrapped_track=='un'){
		image.src='images/baconwrapped_pressed.png';
		baconwrapped_track='pr';

	}else{
		image.src='images/baconwrapped_unpressed.png';
		baconwrapped_track='un';
	}
 }

 function breadedchickenChange(){
	var image = document.getElementById('breadedchicken');
	
	if(breadedchicken_track=='un'){
		image.src='images/breadedchicken_pressed.png';
		breadedchicken_track='pr';

	}else{
		image.src='images/breadedchicken_unpressed.png';
		breadedchicken_track='un';
	}
 }

 function buddinglunchChange(){
	var image = document.getElementById('buddinglunch');
	
	if(buddinglunch_track=='un'){
		image.src='images/buddinglunch_pressed.png';
		buddinglunch_track='pr';

	}else{
		image.src='images/buddinglunch_unpressed.png';
		buddinglunch_track='un';
	}
 }

 function chickenbreastChange(){
	var image = document.getElementById('chickenbreast');
	
	if(chickenbreast_track=='un'){
		image.src='images/chickenbreast_pressed.png';
		chickenbreast_track='pr';

	}else{
		image.src='images/chickenbreast_unpressed.png';
		chickenbreast_track='un';
	}
 }

 function cookedentreesChange(){
	var image = document.getElementById('cookedentrees');
	
	if(cookedentrees_track=='un'){
		image.src='images/cookedentrees_pressed.png';
		cookedentrees_track='pr';

	}else{
		image.src='images/cookedentrees_unpressed.png';
		cookedentrees_track='un';
	}
 }

function cornishhensChange(){
	var image = document.getElementById('cornishhens');
	
	if(cornishhens_track=='un'){
		image.src='images/cornishhens_pressed.png';
		cornishhens_track='pr';

	}else{
		image.src='images/cornishhens_unpressed.png';
		cornishhens_track='un';
	}
 }

 function filletChange(){
	var image = document.getElementById('fillet');
	
	if(fillet_track=='un'){
		image.src='images/fillet_pressed.png';
		fillet_track='pr';

	}else{
		image.src='images/fillet_unpressed.png';
		fillet_track='un';
	}
 }

 function flatironChange(){
	var image = document.getElementById('flatiron');
	
	if(flatiron_track=='un'){
		image.src='images/flatiron_pressed.png';
		flatiron_track='pr';

	}else{
		image.src='images/flatiron_unpressed.png';
		flatiron_track='un';
	}
 }

 function grassbeefChange(){
	var image = document.getElementById('grassbeef');
	
	if(grassbeef_track=='un'){
		image.src='images/grassbeef_pressed.png';
		grassbeef_track='pr';

	}else{
		image.src='images/grassbeef_unpressed.png';
		grassbeef_track='un';
	}
 }

function checkout(){
	console.log("ran");
	if(alaska_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Alaska CoD Fillet", 
				"imageURL": "./images/alaska_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(chickenbreast_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Boneless Skinless Chicken Breasts",
				"imageURL": "./images/chickenbreast_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(cookedentrees_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Fully Cooked Entrees",
				"imageURL": "./images/cookedentrees_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(cornishhens_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Cornish Game Hens",
				"imageURL": "./images/cornishhens_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(baconwrapped_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Bacon Wrapped Hot Dogs",
				"imageURL": "./images/baconwrapped_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(breadedchicken_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Breaded Chicken Selections",
				"imageURL": "./images/breadedchicken_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(buddinglunch_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Budding Lunchmeat",
				"imageURL": "./images/buddinglunch_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(fillet_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Fresh Dover Sole",
				"imageURL": "./images/fillet_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(flatiron_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Flat Iron Flank",
				"imageURL": "./images/flatiron_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(grassbeef_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Grass Fed Beef",
				"imageURL": "./images/grassbeef_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	console.log(alaska_track);
 	console.log(finalcheckout);
 	window.location.href="checkout";
}
*/

//,'costco','cvs','traderjoes','zionmarket','albertsons','food4less','pavillions','wholefoods','northgate'
