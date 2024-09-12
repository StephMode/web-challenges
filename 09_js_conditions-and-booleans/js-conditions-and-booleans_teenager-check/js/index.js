const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
let output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age > 9 && age < 18) {
    output = document.querySelector("output");
    output.textContent = "You are a teen";
  } else {
    output = document.querySelector("output");
    output.textContent = "You are not a teen";
  }

  // const input >= 18 ? "You are a teen" : "You are a teen";

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});

// der Output soll sich entsprechend der button eingabe verändern
// den Text des output muss ich also in den einen oder anderen Text ändern
// You are a teen ODER You are not a teen

/* Erster Ansatz:

1. Variablen festlegen für beides
2. funktion bauen die sich auf out output bezieht, separat

// const isTeenager = "You are a teen";
// const isNotTeenager = "You are not a teen";

// output = age >= 18 ? isTeenager : isNotTeenager;

-> funktioniert nicht

// age >= 18 ? "You are not a teen" : "You are a teen";


*/

/* Zweiter Ansatz:

habe hier versucht, mit ternary operator in der Funktion eine dieser beiden Variablen anzusprechen:

// const isTeenager = "You are a teen";
// const isNotTeenager = "You are not a teen";

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  const output = age >= 18 ? "You're a teen" : "You're not a teen";
  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});

Ergebnis: erzeugt keine Fehler, aber auch kein Ergebnis


*/

/* Dritter Ansatz (it worked 🙏🏻)

textContent nutzen, um Output des html elements <output> zu verändern

Das hier war ein Versuch für einen lösungsansatz, der nicht funktioniert hat
// nach Recherche mit Aki hinzufegügt
// document.getElementById("age").textContent = output;

Möglichkeit 1: neue output Variable

const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age > 9 && age < 18) {
    output2 = document.querySelector("output");
    output2.textContent = "You are a teen";
  } else {
    output2 = document.querySelector("output");
    output2.textContent = "You are not a teen";
  }

Möglichkeit 2:  output Variable mit let
const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
let output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age > 9 && age < 18) {
    output = document.querySelector("output");
    output.textContent = "You are a teen";
  } else {
    output = document.querySelector("output");
    output.textContent = "You are not a teen";
  }




*/
