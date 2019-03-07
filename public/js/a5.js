// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");

 	initNUMForm();
 	console.log("submit ");

 	//initLogin();
 	$('#versionb').click(clickVersionB);
}


// init RSVP form submit listener
function initNUMForm() {
  // add your code here
  $('#numForm').submit(function(e) {
  	e. preventDefault();
  	console.log("submitting form..")
  	var numForm = $('#numForm').val();
    //alert("Phone number successfully connected to all associated reward cards!");

	$(".button1").text("Connected to the highlighted stores below!");

	var image = document.getElementById('storess');
	image.src='images/rewardpressed.png';



  });

 

}

function clickVersionB(e) {
	
	ga('create', 'UA-135670464-1', 'auto');
	ga('send', 'event', 'connectRewards', 'click');
	console.log("test A")
}

// Call this function when the page loads (the "ready" event)
/*
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");

	});

	//from lab 2
	$("a.thumbnail").click(projectClick);
	
	//hide function
	$('#hide').click(function(){
  		$('#hideOnClick').hide();
	});
	
	function showMenu(menuId)  {
		//hide all the menues
		document.getElementById('menu1').style.display="none";
		document.getElementById('menu2').style.display="none";

		//display the menu for this area of the image
		document.getElementById(menuId).style.display="block";
		};

function projectClick(e) {
	e. preventDefault();
	var containingProject = $(this).closest(".project");
	//containingProject.append("<div class='project-description'<p>Description of the project.</p></div>");
    var description = $(containingProject).find(".project-description");

    if (description.length == 0) {
	   $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$(".project-description").fadeOut();
	//description.html("<p>Stop clicking on me! You just did it at" + (new Date()) + "</p>");
}
  
}
*/
