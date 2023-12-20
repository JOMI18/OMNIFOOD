///////////////////////////////////////////////////////////

// Test-run
// console.log("Hello World");

let myName = "Oluwajomiloju Odedairo";
let h1 = document.querySelector(".hero-heading");

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "aqua";
//   h1.style.padding = "5rem";
// });
// console.log(h1);

///////////////////////////////////////////////////////////
// Implementing yearly date change
const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;
console.log(yearEl);

///////////////////////////////////////////////////////////
// Implementing the Mobile Navigation
let headerEl = document.querySelector(".page-header");
let btnNavEl = document.querySelector(".mobile-nav-btn");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Implementing smooth animation scroll

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
// you can''t just add event listeners to an array, you have to add it to individual elements- for that you'd need to loop through the array

allLinks.forEach(function (links) {
  links.addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault();
    const href = links.getAttribute("href");
    // console.log(href);

    // Scroll to the top
    if (href == "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Scroll to Other Links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(href, sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close Mobile Navigation
    if (links.classList.contains("nav-buttons")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Implementing Sticky Header

const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      // console.log("dee");
      document.body.classList.add("sticky");
      // we're using body to be able to apply the styles to the hero section since its a child element
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the ViewPort
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // rootMargin only works in px, this is for when the sticky should be applied
  }
);
obs.observe(heroSectionEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// this is a polyfill- {a js library that helps implement this functionality on safari}
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
