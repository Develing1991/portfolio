"use strict";
// Make navbar transparent when it is on the top
const navbarEl = document.querySelector("#navbar");
document.addEventListener("scroll", function () {
  if (window.scrollY > navbarEl.getBoundingClientRect().height) {
    navbarEl.classList.add("navbar--dark");
  } else {
    navbarEl.classList.remove("navbar--dark");
  }
});
