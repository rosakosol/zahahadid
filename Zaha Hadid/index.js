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


var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


