/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var delay = 200;

// Closes menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if(!x.classList.contains("reveal")){
      x.classList.add("reveal");
    }
    else {
      x.classList.remove("reveal")
    }
}

// Closes menu after a page link is clicked with a delay
function closeMenu() {
  setTimeout(myFunction, delay);
}





