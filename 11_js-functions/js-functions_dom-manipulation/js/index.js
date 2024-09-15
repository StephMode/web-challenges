console.clear();

const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

// ⭐️ Key take away: viel zu komplex gedacht (Stichwort "class as parameter"), einfach erstmal umsetzen, was gefragt wird

/*
How to approach
  1. Take inspo from the darkmode button challenge
  2. create the two functions
  3. add function calls to the first (=red) button 
  4. Test and debug on the first button using console.log()
  5. iterate for the other buttions
*/

// 2.

// color classes

// functions

/* Classes in mehereren Schritten

function removeAllColors() {
  box.classList.remove("gray");
  console.log("Color Removed");
}

function addColor() {
  box.classList.add();
  console.log("Color Added");
}

function buttonClickSuccessMessage() {
  console.log("Button clicked");
}
*/

redButton.addEventListener("click", () => {
  removeAllColors();
  addColor("red");
  // buttonClickSuccessMessage();
});

blueButton.addEventListener("click", () => {
  removeAllColors();
  addColor("blue");
});

greenButton.addEventListener("click", () => {
  removeAllColors();
  addColor("green");
});

grayButton.addEventListener("click", () => {
  removeAllColors();
  addColor("gray");
});

// Write your two functions below:

function removeAllColors() {
  box.classList.remove("gray", "red", "blue", "green");
}

/* Alternative: bei Benjamin gesehen:

function removeAllColors() {
	box.className = "box";
}

damit weißt man der box einfach nur die class .box zu und sonst nix

*/

// 💡 sobald ich einen Parameter als string hinzufüge (egal welchen!), nimmt verändert das element on event die Farbe wie beabsichtigt
function addColor(color) {
  box.classList.add(color);
}

// 3. works, but only with predefined classes within the function itself.
// How to use CSS class as a parameter?
// maybe define the classes as const and call them in the functions?

// mal replace versuchen -> alles noch nicht geklärt

/* Just for debugging:

function buttonClickSuccessMessage() {
  console.log("Button Clicked");
}

*/
