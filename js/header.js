
// Get the modal
var modal = document.getElementById("signInModal");
var modal1 = document.getElementById("signUpModal");
var modal2 = document.getElementById("postModal");


// Get the button that opens the modal
var btn = document.getElementById("signInbtn");
var btn1 = document.getElementById("signUpbtn");
var btn2 = document.getElementById("createpost");

// Get the <span> element that closes the modal
var close1 = document.getElementById("signinclose");
var close2 = document.getElementById("signupclose");
var close3 = document.getElementById("postclose");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
    modal1.style.display = "block";
  }

btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
  modal.style.display = "none";
}

close2.onclick = function() {
    modal1.style.display = "none";
}

close3.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal1.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal2.style.display = "none";
    }
}
