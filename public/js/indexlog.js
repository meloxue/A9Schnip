//'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  // your code here
  console.log("init page");
  // initLogin();
  clearRes();

    $('#logg').click(function(e) {
      //e.preventDefault(); //basically prevent refreshing, once disable linked to new page
      console.log("submitting form..TEST.")
      var rsvpEmail = $('#rsvpEmail').val();
    
     $.post('addRSVP', { rsvpEmail: rsvpEmail });
    });
}

      function clearRes() {
    // add your code here
    console.log("clear response");
    $('#clear').click(function(e) {
      //e.preventDefault();//basically prevent refreshing, once disable linked to new page
      console.log("clearing form..")
      $.post('clearRSVP');


    });
  }
  

/*
  function initLogin() {
    // add your code here
    console.log("init login");
    $('#rsvpForm').submit(function(e) {
      e.preventDefault();
      console.log("submitting form..")
      var rsvpEmail = $('#rsvpEmail').val();
      $.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);

    });
    function postCallback(res) {
    alert("RSVP form successfully submitted!");
   
    }
  }
  */