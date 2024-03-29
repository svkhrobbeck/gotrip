// elements
const elNavOpen = document.querySelector("[data-nav-open]");
const elNavClose = document.querySelector("[data-nav-close]");

// slider
let splide = new Splide(".splide", {
  perPage: 3,
  type: "loop",
  focus: "left",
  gap: 0,
  padding: { left: 10, right: 20 },
  perMove: 1,
  autoplay: true,
  breakpoints: {
    800: {
      perPage: 2,
    },
    640: {
      perPage: 1,
      focus: "center",
    },
  },
});

splide.mount();

// events
elNavOpen.addEventListener("click", e => {
  document.querySelector(elNavOpen.dataset.navOpen).classList.add("header__nav--open");
  document.body.classList.add("body--hidden");
});

elNavClose.addEventListener("click", () => {
  document.querySelector(elNavClose.dataset.navClose).classList.remove("header__nav--open");
  document.body.classList.remove("body--hidden");
});
