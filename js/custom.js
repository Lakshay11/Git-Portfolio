// sticky position on scroll

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("left-sidebar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
