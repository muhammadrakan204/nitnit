const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar-nav");
const lima = document.querySelectorAll(".lima");
const seratus = document.querySelector(".seratus");
const link = document.querySelectorAll(".link");
const btn = document.querySelector(".btn-see-more");
const testi = document.querySelectorAll(".btn-active");

for (let a = 0; a < testi.length; a++) {
  btn.addEventListener("click", function () {
    testi[a].classList.remove("see-more");
    btn.classList.add("hapus-btn");
  });
}

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

for (let a = 0; a < link.length; a++) {
  link[a].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    navbar.style.backgroundColor = "";
  } else {
    navbar.style.backgroundColor = "pink";
  }
}
