// click button to scroll to the top
function topFunction() {
    document.documentElement.scrollTop = 0; // browser type for chrome
  }
  
  
  function validateForm() {
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert ("Please add email");
    return false;
  }
  
  }