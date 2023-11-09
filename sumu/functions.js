// open and close navigation menu
const menubutton = document.getElementById("hamburger");
const menu = document.getElementById("nav");
menubutton.addEventListener("click", () => {
  menubutton.classList.toggle("active");
  menu.classList.toggle("active");
});

// theme change button
const themebutton = document.getElementById("themebutton");
let darkTheme = false;
themebutton.addEventListener("click", () => {
  let themeName = darkTheme ? "dark" : "light";
  setTheme(themeName);
});

// theme change function
function setTheme(themeName) {
  document.documentElement.setAttribute("data-them", themeName);
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
