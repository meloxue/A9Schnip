var projects = require('../projects.json');

var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
var finalcheckout = require('../finalcheckout.json');

var newcoupon = 
			{
				"product": "Alaska CoD Fillet", 
				"imageURL": "./images/alaska_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);

var newcoupon = 
			{
				"product": "Alaska CoD Fillet", 
				"imageURL": "./images/alaska_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);



 * GET home page.


function checkUser(user, pass){
	if((user == currentUser)){
		window.location.href='main';
	}else{
		alert("error");
	}
}
 */

exports.view = function(request, response){
  	response.render('index', projects);
};

exports.adminView = function(request, response){
  response.render('/rsvp', data);
};

exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail;
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);

	response.send(rsvpEmail);
};