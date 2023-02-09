const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar-nav");
const lima = document.querySelectorAll(".lima");
const seratus = document.querySelector(".seratus");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("active");
  hamburgerMenu.classList.toggle("hamburger-normal");
  seratus.classList.toggle("hamburger-kecil");
  for (let i = 0; i < lima.length; i++) {
    lima[i].classList.toggle("hamburger-normal");
  }
});

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    navbar.style.backgroundColor = "";
  } else {
    navbar.style.backgroundColor = "pink";
  }
}
