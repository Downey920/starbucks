"use strict";

const search = document.querySelector(".header .search");
const input = search.querySelector("input");

search.addEventListener("click", () => {
  search.classList.toggle("active");
  if (search.classList.contains("active")) {
    input.setAttribute("placeholder", "통합검색");
    input.focus();
  } else {
    input.setAttribute("placeholder", "");
    input.blur();
    input.value = "";
  }
});

const banners = document.querySelector(".header .banners");
const toTopEl = document.querySelector("#to-top");

document.addEventListener(
  "scroll",
  _.throttle(() => {
    if (scrollY > 300) {
      banners.classList.add("invisible");
      toTopEl.classList.add("visible");
    } else {
      banners.classList.remove("invisible");
      toTopEl.classList.remove("visible");
    }
  }, 100)
);

toTopEl.addEventListener("click", () => {
  scrollTo({ behavior: "smooth", top: 0 });
});

addEventListener("load", () => {
  const homeImgs = document.querySelectorAll(".home__image");

  homeImgs.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("visible");
    }, 500 * (i + 1));
  });
});

const swiper = new Swiper(".notice__line .inner__left .swiper-container", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
});

const noticeSwiperContainer = document.querySelector(
  ".notice .swiper-container"
);
noticeSwiperContainer.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

noticeSwiperContainer.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});

const promotionBtn = document.querySelector(
  ".notice__line .inner__right .promotionBtn"
);
const promotionContainer = document.querySelector(".notice__promotion");

promotionBtn.addEventListener("click", () => {
  promotionContainer.classList.toggle("invisible");
  if (promotionContainer.classList.contains("invisible")) {
    promotionBtn.style.transform = "rotate(180deg)";
  } else {
    promotionBtn.style.transform = "rotate(0)";
  }
});

new Swiper(".notice__promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".notice__promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".notice__promotion .swiper-prev",
    nextEl: ".notice__promotion .swiper-next",
  },
});

const activeSection = document.querySelectorAll(".active");
const option = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.8, // 0 ~ 1
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, option);

activeSection.forEach(act => {
  observer.observe(act);
});

new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});
