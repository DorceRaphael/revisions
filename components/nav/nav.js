var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
  navBackground();
});
function navBackground() {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset == 0) {
    // BLACK BG WHITE BORDER
    document.querySelector("nav").style.backgroundColor = "#0c0c0c00";
    document.querySelector("nav").style.borderBottom = "1px solid #ffffff00";
  } else {
    document.querySelector("nav").style.backgroundColor = "#0c0c0c";
    document.querySelector("nav").style.borderBottom = "1px solid #ffffff";
  }
  prevScrollpos = currentScrollPos;
}

const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const menuToggle = document.querySelector(".nav-toggle");
let isMenuOpen = false;

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener("click", (e) => {
  e.preventDefault();

  // toggle a11y attributes and active class
  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  nav.classList.toggle("nav-open");
});

// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener("keydown", (e) => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll(".nav-link");
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

