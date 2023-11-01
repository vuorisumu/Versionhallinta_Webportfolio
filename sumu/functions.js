// open and close navigation menu
const menubutton = document.getElementById("hamburger");
const menu = document.getElementById("nav");
menubutton.addEventListener("click", () => {
  menubutton.classList.toggle("active");
  menu.classList.toggle("active");
});

const header = document.getElementById("header");
const logo = document.getElementById("logo");
const originalHeight = header.style.getPropertyValue("height");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.height = "20px";
  } else {
    header.style.height = originalHeight;
  }
}
