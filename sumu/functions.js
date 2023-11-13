document.addEventListener("DOMContentLoaded", function () {
  let root = document.querySelector(":root");

  setTimeout(function () {
    root.style.setProperty("--transition-time", "0.5s");
  }, 1000);
});

// call theme check on page load
window.onload = function () {
  checkTheme();
};

// open and close navigation menu
const menubutton = document.getElementById("hamburger");
const menu = document.getElementById("nav");
menubutton.addEventListener("click", () => {
  menubutton.classList.toggle("active");
  menu.classList.toggle("active");
});

// check if theme preference has already been set
function checkTheme() {
  // if this is not the first time on this site
  const prevTheme = localStorage.getItem("theme");
  if (prevTheme) {
    setTheme(prevTheme);
    return;
  }

  // first time on site but prefers dark theme
  const darkThemePreference = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemePreference.matches) {
    setTheme("dark");
    return;
  }

  // set default theme
  setTheme("light");
}

// theme change button
const themebutton = document.getElementById("themebutton");
let darkTheme = false;
themebutton.addEventListener("click", () => {
  let themeName = darkTheme ? "light" : "dark";
  setTheme(themeName);
});

// theme change function
function setTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
  darkTheme = themeName === "dark";
}
// scroll functionality
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const originalHeight = header.style.getPropertyValue("height");
const shrinkHeight = "50px";
const sections = document.querySelectorAll(".anchor");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // shrink header when scrolling
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }

  // highlight current section link
  sections.forEach((current, i) => {
    const sectionHeight = current.parentElement.offsetHeight;
    const sectionTop = current.parentElement.offsetTop - (i === 0 ? 150 : 50);
    sectionId = current.getAttribute("id");
    if (
      window.scrollY > sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector("#nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("#nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
