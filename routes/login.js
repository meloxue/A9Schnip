var data = {
  rsvp: []
};

//var data1 = require('../users.json');
//var data1 = users.parse(txt);
/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
 // response.render('rsvp', data);
  response.render('main', data);
};

exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail;
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);
	console.log(rsvpEmail);
	//response.render('rsvp' , data);
	response.render('main' , data);



};

exports.clearRSVP = function(request, response) {
	data = {
   rsvp: []
   };

 response.render('main', data);
 console.log("clear");
};




/*
exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
	var newfriend =
		{
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people",			
		}
	data.friends.push(newfriend);
	// Your code goes here
		console.log(newfriend);
	res.render("index.handlebars" , data);
};

exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail;
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);
	console.log(rsvpEmail);
	response.render('rsvp' , data);



};

exports.addRSVP = function(request, response){
	var rsvpEmail = request.body.rsvpEmail;
	var newEmail = 
	{
		"email": rsvpEmail,
	}
  
	console.log(rsvpEmail);

	data1.users.push(rsvpEmail);
	//txt = users.stringify(data);
	console.log(rsvpEmail);
	response.render('rsvp', data1);



};

*/