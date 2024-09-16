/*

Switch the input values of the two input fields when clicking the button

- [x] Add a second input element to the index.html
- [x] Assign the second input element to a variable
- [x] Add a third button (a switch button) to the index.html
- [x] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, 
the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

// switch function
// first try: erstmal fn bauen, die lowercase detected
// second try: es geht nicht um den case type, sondern den VALUE, der soll vertauscht werden

switchButton.addEventListener("click", () => {
  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

/* tinkering in the switchButton function

viel versucht mit .replace method, hat nicht so recht funktioniert

firstInput.value.replace("", "x");
console.log("button clicked");

const firstInputValue = firstInput.value;
const secondInputValue = secondInput.value;

console.log(firstInputValue);

firstInput.value.replace(firstInput.value, secondInput.value);
secondInput.value.replace(secondInput.value, firstInput.value);

firstInputValue.replace(firstInput.value, secondInput.value);
secondInputValue.replace(secondInput.value, firstInput.value);

*/
