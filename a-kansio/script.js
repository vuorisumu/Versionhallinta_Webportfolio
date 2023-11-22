document.addEventListener("DOMContentLoaded", function () {
  // Store initial content
  var initialContent = "Hello, hello, hello";
  var boxContentElement = document.getElementById("boxContent");

  // Function to change the content
  function changeContent(newContent) {
    boxContentElement.innerHTML = newContent;
  }

  // Add click event listeners to the links
  document.getElementById("link1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (page reload)
    changeContent(
      "this is content for link1. <br> .... Demo Java project? <br> include image(s)"
    );
  });

  document.getElementById("link2").addEventListener("click", function (event) {
    event.preventDefault();
    changeContent(
      "this is content for link2 <br> .... Demo Python project? <br> include image(s)"
    );
  });

  document.getElementById("link3").addEventListener("click", function (event) {
    event.preventDefault();
    changeContent(
      "this is content for link3 <br> .... Demo Frontend project? <br> include image(s)"
    );
  });

  // Set initial content
  changeContent(initialContent);
});
// Function to add the fade-out class to .hero_img
function addFadeOutClass() {
  const heroImage = document.querySelector(".hero_img");

  if (heroImage) {
    const scrollPosition = window.scrollY;
    const triggerPosition = document
      .querySelector(".hero")
      .getBoundingClientRect().bottom;

    if (scrollPosition > triggerPosition) {
      // Introduce a delay of 1000 milliseconds (1 second) before applying the fade-out effect
      setTimeout(function () {
        heroImage.classList.add("fade-out");
      }, 500); // Adjust the delay duration as needed
    } else if (scrollPosition < triggerPosition) {
      setTimeout(function () {
        heroImage.classList.add("fade-in");
      }, 500);
    } else {
      heroImage.classList.remove("fade-out");
    }
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", addFadeOutClass);

// Call the function once to handle the initial state
addFadeOutClass();
