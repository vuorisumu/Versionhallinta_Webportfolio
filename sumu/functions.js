// open and close navigation menu
const menubutton = document.getElementById("hamburger");
const menu = document.getElementById("nav");
menubutton.addEventListener("click", () => {
  menubutton.classList.toggle("active");
  menu.classList.toggle("active");
});

// scroll functionality
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const originalHeight = header.style.getPropertyValue("height");
const shrinkHeight = "50px";
const sections = document.querySelectorAll("section[id]");
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
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
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
