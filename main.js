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

const navbarMenuEl = document.querySelector(".navbar__menu");
navbarMenuEl.addEventListener("click", function (event) {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) return;
  console.log(event.target.dataset.link);
  const scollTo = document.querySelector(link);
  scollTo.scrollIntoView({ behavior: "smooth" });
});
