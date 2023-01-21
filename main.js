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

// 스크롤 다운시 home 투명하게
const homeEl = document.querySelector("#home");
const homeContainerEl = document.querySelector(".home__container");
const homeHeight = homeEl.getBoundingClientRect().height;
document.addEventListener("scroll", function () {
  const opacityRate = 1 - Number((window.scrollY / homeHeight).toFixed(1)); // 1 -> 0.9 ->... 0
  // console.log(window.scrollY / homeHeight);

  if (opacityRate < 0) return;
  homeContainerEl.style.opacity = opacityRate;
  console.log(opacityRate);
});

//스크롤 업 버튼 보여주기
const arrowUpBtnEl = document.querySelector(".arrow-up");
document.addEventListener("scroll", function () {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtnEl.classList.add("visible");
  } else {
    arrowUpBtnEl.classList.remove("visible");
  }
});

// 스크롤 업 버튼 누르면 위로 올라가기
arrowUpBtnEl.addEventListener("click", function () {
  scrollIntoView("#home");
});
