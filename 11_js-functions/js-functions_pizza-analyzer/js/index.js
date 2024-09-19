console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// so mache die input values von der app global im script verfügbar
let diameter1 = pizzaInput1.value;
let diameter2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  diameter1 = pizzaInput1.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, diameter1);
  updateOutputColor(diameter1, diameter2);
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  updateOutputColor(diameter1, diameter2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const pizzaRadius1 = (diameter1 / 2) ** 2 * Math.PI;
  // warum nennen die das denn Radius?? Das readme fragt doch nach der Fläche???
  // Aber Formel ist klar: radius(bzw. Durchmesser/2) ** 2 * PI
  const pizzaRadius2 = (diameter2 / 2) ** 2 * Math.PI;
  output.innerHTML = Math.round((pizzaRadius2 / pizzaRadius1) * 100);
  // letztes fn statement adressiert querySel "output" in line 9
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = `${result}px`;
}
// die params:
// pizzaE: damit adressiert man im fn call das richtige DOM Element mit entspr. variable
// newSize: damit holt man sich bei fb call den input aus dem eventListener, in dem die fn gecalled wird, ab
// dieses template literal wird gebraucht, um den String innerhalb des scripts sicher weiterzugeben.
// Das Ergebnis meiner const result ist nämlich ein integer, der in einen string aus "result-integerPX" umgewandelt werden muss, damit das attribute width im html wiederum damit arbeiten kann bzw damit befüllt werden kann

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor = `var(${
    size1 <= size2 ? "--green" : "--red"
  }`;
}
