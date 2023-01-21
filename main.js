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

// navbar 버튼 클릭 이동
const navbarMenuEl = document.querySelector(".navbar__menu");
navbarMenuEl.addEventListener("click", function (event) {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) return;
  scrollIntoView(link);
});

// home의 contact me 클릭 시 contact footer로 이동
const homeContactEl = document.querySelector(".home__contact");
homeContactEl.addEventListener("click", function (event) {
  scrollIntoView("#contact");
});

// 스크롤 이동 공통함수로 분리
function scrollIntoView(selector) {
  const scollTo = document.querySelector(selector);
  scollTo.scrollIntoView({ behavior: "smooth" });
}
