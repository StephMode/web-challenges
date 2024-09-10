console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// define variables for buttons
// remember to use const variables
// remember to use js-data attributes for querySelector
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// create events for buttons
// Steps:
// 1) add event listener
// 2) leave () void
// 3) create function to trigger css classes

// go with a simple console.log first to see if it works - done and works

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  //   name of the class without führende Zeichen is sufficient here
  console.log("Dark Mode selected");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("Light Mode selected");
});

toggleButton.addEventListener("click", () => {
  // bodyElement.classList.add("dark");
  bodyElement.classList.toggle("dark");
  //   /.toggle was the simple solution
  console.log("Toggle selected");
});
