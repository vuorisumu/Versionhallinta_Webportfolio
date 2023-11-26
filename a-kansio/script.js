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

