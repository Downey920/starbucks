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
