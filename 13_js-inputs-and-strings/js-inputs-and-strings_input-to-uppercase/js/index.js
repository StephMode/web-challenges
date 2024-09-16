console.clear();

const firstInput = document.querySelector("[data-js=first-input]");

firstInput.addEventListener("input", () => {
  const lowerCaseValue = firstInput.value;
  const upperCaseValue = lowerCaseValue.toUpperCase();
  firstInput.value = upperCaseValue;
});

/* 
❔ Why do I not need to call this function for it to work?

💡 Two reasons:
1. The event listener sets up the function in a way that it fires whenever an input is detected
2. () => {} is the callback function that fires in case there is an event to be listened to

*/

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

/* Approach

- set querySelector
- implement function
-- set up event listener "input"    
-- basis: value.method
-- otucome: string methid .toUpperCase();


*/
