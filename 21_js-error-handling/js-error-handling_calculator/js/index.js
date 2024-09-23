console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorOutput = document.querySelector(".error"); // habe ich zuerst via selectByClassName gemacht, hat nicht funktioniert, wählt außerdem das erste Element mit dieser class aus

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!"); // das geht erstmal nur in die console
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value; // diese variable speichert den value des events, für den der eventListener auf das Form eingerichtet wurde
  errorOutput.innerHTML = ""; // diese DOM method setzt den text content im p element mit der class error zurück, wenn das form erneut submitted wird
  try {
    operations[operation](firstNumber, secondNumber);
    // ❌ NICHT GANZ RICHTIG: diese statement führt eine der im  object "operations" ge-nested-ten functions, und zwar auf Basis der const operation, in der der value des form-submit-event bestimmt ist
    // 👉🏻 RICHTIG: Dieses Statement führt eine der Funktionen aus dem "operations"-Objekt basierend auf der gewählten Operation aus.
    // 💡 in dem object sind separate methods definiert
    // das ist KEIN NESTING !!!
    output.innerText = operations[operation](firstNumber, secondNumber);
    // ❌ NICHT GANZ RICHTIG: diese DOM-method fügt das Ergebnis der ge-nested-en function in das entsprechende html-element
    // 👉🏻 RICHTIG: Diese DOM-Methode fügt das Ergebnis der entsprechenden Funktion (basierend auf der Operation) in das "output"-Element ein.
    // 💡 auch hier: kein nesting, sondern separate methods im object
  } catch (error) {
    output.innerText = "Error";
    errorOutput.innerText = error.message; // funktioniert nicht mit "Can't divide by 0, please use other divisor"; fügt im Fehlerfall die throw error "" message in den textContent des html elements, das wir mit der const errorMessage via querySelector im DOM adressiert haben
    // throw error;
    // wirft den error in der Konsole aus
    // als uncaught, weil der Fehler hier nochmal geworfen wird, was nicht nötig ist, da bereits statements greifen, die im Fehlerfall etwas ausführen
  }
});
