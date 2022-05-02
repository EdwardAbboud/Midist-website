// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100vh";
  // document.querySelector(".mobile-nav").style.height = "700px";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0";
  // document.querySelector(".mobile-nav").style.height = "0%";
}

window.onload(closeNav());

// LAZY-LOAD
// Set the options globally
// to make LazyLoad self-initialize
window.lazyLoadOptions = {
  // Your custom settings go here
};

// Listen to the initialization event
// and get the instance of LazyLoad
window.addEventListener(
  "LazyLoad::Initialized",
  function (event) {
    window.lazyLoadInstance = event.detail.instance;
  },
  false
);
