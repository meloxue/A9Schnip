$(document).ready(function() {
  initializePage();
})

function initializePage() {
  // your code here
  console.log("init page");
  // initLogin();
  clearBar();
 }




var thighs_track = 'un';
var nuggets_track = 'un';
var delights_track = 'un';
var fillet_track = 'un';
var dried_track = 'un';
var sticks_track = 'un';
var corned_track = 'un';
var lean_track = 'un';
var shoulder_track = 'un';
var coke_track = 'un';
var tea_track = 'un';
var redbull_track = 'un';
var cheetos_track = 'un';
var candy_track = 'un';
var rice_cake_track = 'un';
var rice_track = 'un';
var soap_track = 'un';
var tylenol_track = 'un';


function thighsChange(){
	var image = document.getElementById('chicken_thighs');
	
	if(thighs_track=='un'){
		image.src='images/chicken_thighs_pr.jpg';
		thighs_track='pr';	
		var codebar= "./images/goldn.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/chicken_thighs_un.jpg';
		thighs_track='un';
	}

    }


 function nuggetsChange(){
	var image = document.getElementById('chicken_nuggets');
	
	if(nuggets_track=='un'){
		image.src='images/chicken_nuggets_pr.jpg';
		nuggets_track='pr';
		var codebar= "./images/perdue.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/chicken_nuggets_un.jpg';
		nuggets_track='un';
	}
 }

 function delightsChange(){
	var image = document.getElementById('chicken_delights');
	
	if(delights_track=='un'){
		image.src='images/chicken_delights_pr.jpg';
		delights_track='pr';
		var codebar= "./images/jimmy.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/chicken_delights_un.jpg';
		delights_track='un';
	}
 }

 function filletChange(){
	var image = document.getElementById('fish_fillet');
	
	if(fillet_track=='un'){
		image.src='images/fish_fillet_pr.jpg';
		fillet_track='pr';	
		var codebar= "./images/salmon.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/fish_fillet_un.jpg';
		fillet_track='un';
	}
 }

  function driedChange(){
	var image = document.getElementById('fish_dried');
	
	if(dried_track=='un'){
		image.src='images/fish_dried_pr.jpg';
		dried_track='pr';
		var codebar= "./images/dahfa.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/fish_dried_un.jpg';
		dried_track='un';
	}
 }
  function sticksChange(){
	var image = document.getElementById('fish_sticks');
	
	if(sticks_track=='un'){
		image.src='images/fish_sticks_pr.jpg';
		sticks_track='pr';	
		var codebar= "./images/gordons.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/fish_sticks_un.jpg';
		sticks_track='un';
	}
 }

  function cornedChange(){
	var image = document.getElementById('beef_corned');
	
	if(corned_track=='un'){
		image.src='images/beef_corned_pr.jpg';
		corned_track='pr';	
		var codebar= "./images/buddig.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/beef_corned_un.jpg';
		corned_track='un';
	}
 }

 function leanChange(){
	var image = document.getElementById('beef_lean');
	
	if(lean_track=='un'){
		image.src='images/beef_lean_pr.jpg';
		lean_track='pr';
		var codebar= "./images/ocado.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beef_lean_un.jpg';
		lean_track='un';
	}
 }

 function shoulderChange(){
	var image = document.getElementById('beef_shoulder');
	
	if(shoulder_track=='un'){
		image.src='images/beef_shoulder_pr.jpg';
		shoulder_track='pr';
		var codebar= "./images/western.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beef_shoulder_un.jpg';
		shoulder_track='un';
	}
 }

 function cokeChange(){
	var image = document.getElementById('beverage_coke');
	
	if(coke_track=='un'){
		image.src='images/beverage_coke_pr.jpg';
		coke_track='pr';
		var codebar= "./images/coka.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beverage_coke_un.jpg';
		coke_track='un';
	}
 }

 function teaChange(){
	var image = document.getElementById('beverage_tea');
	
	if(tea_track=='un'){
		image.src='images/beverage_tea_pr.jpg';
		tea_track='pr';
		var codebar= "./images/lipton.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beverage_tea_un.jpg';
		tea_track='un';
	}
 }

 function redbullChange(){
	var image = document.getElementById('beverage_redbull');
	
	if(redbull_track=='un'){
		image.src='images/beverage_redbull_pr.jpg';
		redbull_track='pr';
		var codebar= "./images/redbull.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beverage_redbull_un.jpg';
		redbull_track='un';
	}
 }

 function cheetosChange(){
	var image = document.getElementById('snacks_cheetos');
	
	if(cheetos_track=='un'){
		image.src='images/snack_cheetos_pr.jpg';
		cheetos_track='pr';	
		var codebar= "./images/Flamin.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/snack_cheetos_un.jpg';
		cheetos_track='un';
	}
 }

 function candyChange(){
	var image = document.getElementById('snacks_candy');
	
	if(candy_track=='un'){
		image.src='images/snack_candy_pr.jpg';
		candy_track='pr';
		var codebar= "./images/Trolli.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/snack_candy_un.jpg';
		candy_track='un';
	}
 }

 function riceCakeChange(){
	var image = document.getElementById('snacks_rice_cake');
	
	if(rice_cake_track=='un'){
		image.src='images/snack_rice_cake_pr.jpg';
		rice_cake_track='pr';	
		var codebar= "./images/riskakor.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/snack_rice_cake_un.jpg';
		rice_cake_track='un';
	}
 }

 function riceChange(){
	var image = document.getElementById('other_rice');
	
	if(rice_track=='un'){
		image.src='images/other_rice_pr.jpg';
		rice_track='pr';	
		var codebar= "./images/cucoco.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/other_rice_un.jpg';
		rice_track='un';
	}
 }

function soapChange(){
	var image = document.getElementById('other_soap');
	
	if(soap_track=='un'){
		image.src='images/other_soap_pr.jpg';
		soap_track='pr';	
		var codebar= "./images/lux.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/other_soap_un.jpg';
		soap_track='un';
	}
 }

 function tylenolChange(){
	var image = document.getElementById('other_tylenol');
	
	if(tylenol_track=='un'){
		image.src='images/other_tylenol_pr.jpg';
		tylenol_track='pr';
		var codebar= "./images/tylenol.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/other_tylenol_un.jpg';
		tylenol_track='un';
	}
 }

 function clearBar() {
    // add your code here
    console.log("clear barcode");
    $('#clearbars').click(function(e) {
      //e.preventDefault();//basically prevent refreshing, once disable linked to new page
      console.log("clearing barcodes..")
      $.post('clearBarss');


    });
  }




 //add card 


/*

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

/*
 
 var heart_track = 'un';
 var guac_track = 'un';
 var gran_track = 'un';
 var pizza_track = 'un';
 var spam_track = 'un';

function heartChange(){
	var image = document.getElementById('heart');
	
	if(heart_track=='un'){
		image.src='images/sheart_pressed.jpg';
		heart_track='pr';
	}else{
		image.src='images/sheart_unpressed.jpg';
		heart_track='un';
	}
 }

 function alaskaChange(){
	var image = document.getElementById('alaska');
	
	if(alaska_track=='un'){
		image.src='images/alaska_pressed.jpg';
		alaska_track='pr';

	}else{
		image.src='images/alaska_unpressed.jpg';
		alaska_track='un';
	}
 }

 function guacChange(){
	var image = document.getElementById('guac');
	
	if(guac_track=='un'){
		image.src='images/guac_pressed.jpg';
		guac_track='pr';
	}else{
		image.src='images/guac_unpressed.jpg';
		guac_track='un';
	}
 }
 
  function granChange(){
	var image = document.getElementById('gran');
	
	if(gran_track=='un'){
		image.src='images/gran_pressed.jpg';
		gran_track='pr';
	}else{
		image.src='images/gran_unpressed.jpg';
		gran_track='un';
	}
 }
 
  function pizzaChange(){
	var image = document.getElementById('pizza');
	
	if(pizza_track=='un'){
		image.src='images/pizza_pressed.jpg';
		pizza_track='pr';
	}else{
		image.src='images/pizza_unpressed.jpg';
		pizza_track='un';
	}
 }
 
  function spamChange(){
	var image = document.getElementById('spam');
	
	if(spam_track=='un'){
		image.src='images/spam_pressed.jpg';
		spam_track='pr';
	}else{
		image.src='images/spam_unpressed.jpg';
		spam_track='un';
	}
 }

 */