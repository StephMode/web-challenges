console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const addButton = document.getElementById("addition");
const subtractButton = document.getElementById("subtraction");
const multiplyButton = document.getElementById("multiplication");
const divideButton = document.getElementById("division");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const operations = {
  addition: add,
  subtraction: subtract,
  multiplication: multiply,
  division: divide,
}; // in diesem obj lege ich meine fn für die rechenoperationen ab, die muss ich ohne arguments callen

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // let result;

  // --v-- write your code here --v--
  const numberA = Number(event.target.elements.numberA.value);
  const numberB = Number(event.target.elements.numberB.value);
  const operation = event.target.operator.value;

  /* Version 1: meine Lösung - funktioniert!

  if (event.target.operator.value === "addition") {
    result = add(numberA, numberB);
  } else if (event.target.operator.value === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (event.target.operator.value === "multiplication") {
    result = multiply(numberA, numberB);
  } else {
    result = divide(numberA, numberB);
  }
 

*/

  // Lösung 2: noch konziser
  // basiert auf const operations-object und einer const für die operation
  // hier muss result als const deklariert werden, let in 36 dafür raus

  const result = operations[operation](numberA, numberB);
  // was passiert hier:
  // 1) wir deklarieren result mit dem value eines key value pairs aus dem obj "operations" mit meinen fn
  //    das passiert, in dem wiederum auf den value der const "operation" zurückgegriffen wird,
  //    diese entspricht dem value des radio button input element bei submission (also event)
  // 2) da der value von result eine fn ist (bzw. "operation" ein platzhalter für eine fn),
  //    fügen wir direkt die beiden param an, die die fn bei "submit" event dann aufgreift

  resultOutput.textContent = result;
  // event.target.reset(); // nicht nötig, verschlechtert UX
});

/* Wie gehe ich das an:

1) Daten des Form erfassen
  1)1. erstmal event.target.value -> ✅ reicht
  1)2. ansonsten object create
  jeweils clog

2) für jeden Operationsfall (also jede mögliche Auswahl des operator) eine Funktion einbauen,
weil form in jedem Fall nur eine operation durchführen kann, weil ja nur eine Eingabe möglich
2) 1. Auf Basis von Ergebnis von 3) iterieren
xx> app kommt jetzt etwas durcheinander, nach dem alle fn durchiteriert
2) 2. mal mit reset versuchen ✅ xx> besser, aber löst mein Problem noch nicht
2) 3. evList an let "nameOP"Result binden und let result an jeweilige let binden xx> funktioniert auch nicht
2) 4. mal if/else statement ✅🙌🏻 CHALLENGE SOLVED

✅ 3) Anfangen mit addition
3) 1. einfache fn, die result überschreibt ✅ -> ist noch nicht input-sensitive
3) 2. input-sensitive fn
3) 2. 1. querySel für die radio buttons ✅ -> am besten hier: getElementbyID
3) 2. 2. evList "input" einschachten ✅
3) 2. 3. in evList "input" value von addition greifen ❌ -> muss nicht, reicht auch einfache => fn, die mittels evList add() triggert
=> funktioniert mit addition schonmal 🙌🏻
3) 2. 4. mal für subtract replizieren 
=> funktioniert auch 🙌🏻

hat nicht funktioniert, weil man keine evList in den submit evList einschachteln muss

let additionResult = addButton.addEventListener("input", () => {
    add(numberA, numberB);
    return;
  });
  result = additionResult;

  // subtractButton.addEventListener("input", () => subtract(numberA, numberB));
  // result = subtract(numberA, numberB);

  // multiplyButton.addEventListener("input", () => multiply(numberA, numberB));
  // result = multiply(numberA, numberB);

  // divideButton.addEventListener("input", () => divide(numberA, numberB));
  // result = divide(numberA, numberB);




*/
