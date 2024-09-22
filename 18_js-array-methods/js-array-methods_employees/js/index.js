import { employees } from "../utils/db.js";

// Exercise 1:
// This function receives an array of employees and a last name.
// Try to find an object with the corresponding lastName and return the found object (instead of 'null')
// Check the browser preview and conduct some tests to ensure it works correctly.

/* Exercise 1 Lösungsversuche ⭐️ Key Learning: find() nicht nötig, wenn ich nur ein einzelnes element/objekt suche

würde hier filter() verwenden

Verusch 1: 
wie ist die Logik: const searchResult, filtere in employees nach lastName => wenn searchResult ===
xx> fast richtig, aber nicht mit der const abgleichen, die ist nämlich container für das zurückgelieferte

Versuch 2: 
wie ist Logik: wenn result enthalten, dann return true, sonst false, das müsste reichen - also includes


function findByLastName(employees, lastName) {
  employees.includes(lastName);
}

xx> funktioniert nicht, 
xx> output exercise 1 gibt "No result"
xx>erstmal filter() versuchen

Versuch 3: const searchResult, filtere in employees nach lastName => hier dann includes verschachteln?

function findByLastName(employees, lastName) {
  const searchResult = employees.filter((lastName) => {
    employees.includes(lastName);
  });
  return searchResult > 0;
}

xx> funktioniert noch nicht

Versuch 4: mit Verschachtelung filter() > .includes() weiter versuchen

function findByLastName(employees, lastName) {
  const searchResult = employees.filter((lastName) => {
    employees.includes(lastName);
  });
  return searchResult;
}

xx> gibt "undefined" als search result zurück
xx> ⚠️ lastName param is not read - momentan

xx> return ohne const auch "no result"

was passiert in meiner fn eigentlich?

function findByLastName(employees, lastName) {
  const searchResult = employees.filter((lastName) 
  // iteriert über das array employees und gibt ein neues array zurück,
  // das gemäß callback fn (also der fn nach => innerhalb der Klammern)
  // true ist
  => 
    {
    employees.includes(lastName); // ich überprüfe den array auf lastName
    // ⚡️ damit überschreibe ich den param lastName
    // ⚡️ damit kann ich nicht bis in die objects rein gehen, die der array beinhaltet
  });
  return searchResult; // gibt das searchResult zurück, das undefined bleiben muss, weil ich nicht aus den obj im arr aufrufen konnte
}

Versuch 5: Verschachtelung filter() find()

erstmal nur find()
function findByLastName(employees, lastName) {
  employees.find((lastName) => result === lastName);
}
xx> funktioniert nicht, glaube dass ich hier schon ne const brauche, weil das sonst ins leere läuft

Versuch 6: nochmal

function findByLastName(employees, lastName) {
  const searchResult = employees.filter((lastName) => {
    employees.find(lastName) =>  searchResult === lastName;
  });
  return searchResult;
}

Probleme im Code
- Falsche Verwendung von find() innerhalb von filter(): Die Logik ist hier nicht richtig. find() wird nicht innerhalb von filter() verwendet. Du solltest stattdessen find() alleine nutzen, um den ersten Mitarbeiter mit dem entsprechenden Nachnamen zu finden.
- Benennungskonflikt: Du verwendest lastName sowohl als Parameter für die Funktion als auch als Parameter in der Callback-Funktion. Das führt zu Verwirrung, da die innere Funktion den äußeren Parameter überschreibt.
- Unnötige Verschachtelung: Die Verwendung von filter() hier ist nicht nötig, wenn du nur ein einzelnes Objekt suchst. find() ist der richtige Weg.


Lösung

function findByLastName(employees, lastName) {
  const searchResult = employees.find
  // damit rufe ich .find method und binde sie an eine const, um den ausgegebenn Wert weiter zu verweden
  (
    (employee)
    // den param employee brauche ich wieder variable/platzhalter für alle elements des array employees
    => employee.lastName === lastName
    // in der callback fn gleiche ich dann die values mit dem key lastName innert der objects des array ab mit
    // lastName, das als param dann weiter unten die const result aufnimmt
  ); 
  // 
  return searchResult || null;
  // das ist die verkürzte Notation eines if/else statements
  // klartext: speichere das Ergebnis von find() im array employees, das du mit param lastName unten aus dem
  // Wert des Eingabefelds nehmen willst, in der const searchResult ab
  // und gebe es weiter
  // else: gebe null weiter
}

*/

// ✅ meine finale Lösung
// function findByLastName(employees, lastName) {
//   const searchResultLastName = employees.find(
//     (employee) => employee.lastName === lastName
//   );
//   return searchResultLastName || null;
// }

// einfacher, aus der Lösung

function findByLastName(employees, lastName) {
  return employees.find((employee) => employee.lastName === lastName);
}
// gibt zurück die elemente der objects in "employees" die === result sind
// param employee wird gebraucht, um die elemente des array employees in die callback fn zu holen
// in der callback fn wird dann auf true/false geprüft

// Diese Funktion sucht im 'employees'-Array nach dem ersten Mitarbeiter,
// dessen 'lastName' dem angegebenen 'lastName' entspricht.
// Der Parameter 'employee' wird in der Callback-Funktion verwendet,
// um auf die Eigenschaften der Mitarbeiter-Objekte zuzugreifen.
// Die Methode 'find' gibt das erste gefundene Objekt oder 'undefined' zurück,
// wenn kein passendes Objekt gefunden wird.

/* Alternativ
function findByLastName(employees, lastName) {
  // Gehe durch das employees Array und suche nach einem Mitarbeiter mit dem entsprechenden Nachnamen
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i]; // Aktueller Mitarbeiter

    // Vergleiche den Nachnamen des aktuellen Mitarbeiters mit dem gesuchten Nachnamen
    if (employee.lastName === lastName) {
      return employee; // Wenn ein Treffer gefunden wurde, gebe das Mitarbeiterobjekt zurück
    }
  }

  // Wenn kein Mitarbeiter gefunden wurde, gebe null zurück
  return null;
}
*/

// Exercise 2:
// The same as above, but now you are searching by the 'id'.

/* Exercise 2 Lösungsversuche ⭐️ Key Learning: naming of const with local scope (within fn):
-  can be the same within diffrent fn which are executing similar logic and return similar results 
=> makes the code more compact
-  can be the named more specifically within diffrent fn which are executing similar logic and return similar results 
=> makes the code more understandable, esp. in largner projects

hier brauche ich find() method
ich muss die objects des array nach dem key value pair "id" absuchen

Logik: 
fn findByID, die den "employees" array und "id"() als input bzw. result aus der form submission aufnehmen kann
speichere in der const *searchResult* = finde in dem array employees (=param 1 der fn findByID und Verweis auf den gleichnamigen array)
  den employee(param der callback fn)
    => employee(=param).id === id
    hier kann ich im vorher aufgerufenen array nun direkt die objects ansteuern
  return searchResult || null;

*/

// meine finale Lösung
// function findById(employees, id) {
//   const searchResultID = employees.find((employee) => employee.id === id);
//   return searchResultID || null;
// }

// einfacher, aus der Lösung

function findById(employees, id) {
  return employees.find((employee) => employee.id === id);
}

// Exercise 3:
// This time you want to find an employee who lives in a city that includes a specific substring.

/* Exercise 3 Lösungsversuche

Verusch 1 💪 den Code habe ich auf Anhieb selbst geschrieben (wenn auch nur teilfunktional):

hier brauche ich wieder find()
aber wahrscheinlich eine andere Form davon
oder eine Kombination aus find() und includes()

Logik:
fn findByCity, die den "employees" array und "id"() als input bzw. result aus der form submission aufnehmen kann
speichere in der const *searchResultCity* = finde in dem array employees (=param 1 der fn findByID und Verweis auf den gleichnamigen array)
  den employee(param der callback fn)
    => employee(=param).city.includes(string)
    hier kann ich im vorher aufgerufenen array nun direkt die objects ansteuern
    in diesem Fall muss ich die notation so schreiben, dass ich pro object(durch den param employee aufgerufen) jeweils den key "city" durchsuce
    Warum includes(): weil ich employee nach bestimmter Stadt (oder substring Stadtnamen) abrufen will 
  return searchResult || null;

==> ⚡️ funktioniert grunsätzlich, aber gibt mir nur einen employee zurück

Lösung:

function findByCitySubString(employees, string) {
  const searchResultCity = employees.find((employee) => // ⚡️ find() hört beim ersten match auf, deshalb hier nicht geeignet
    employee.city.includes(string)
  );
  return searchResultCity || null;
}

xx> reicht das schon, oder muss ich da noch mehr machen 
xxx> nein, weil das nicht alle objects mit matching string/substring absucht, sondern beim ersten aufhört
💡das liegt daran, dass ich hier find() anwende, das iteriert nur bis zum ersten match

==> ich brauche etwas, das 1+n matches aus der search query nimmt und zur weiteren Bearbeitung weitergibt
====> filter() kann das

Verusch 2:

ich brauche also filter(), nicht find(), weil ich mehr als 1 element aus dem Ursprungs-array zurückgeben muss

Logik
fn findByCity, die den "employees" array und "id"() als input bzw. result aus der form submission aufnehmen kann
speichere in der const *searchResultCity* = *filtere* in dem array employees (=param 1 der fn findByID und Verweis auf den gleichnamigen array)
  den employee(param der callback fn)
    ?? ==> kann nicht direkt returnen?

    => employee(=param).city.includes(string)
    hier kann ich im vorher aufgerufenen array nun direkt die objects ansteuern
    in diesem Fall muss ich die notation so schreiben, dass ich pro object(durch den param employee aufgerufen) jeweils den key "city" durchsuce
    Warum includes(): weil ich employee nach bestimmter Stadt (oder substring Stadtnamen) abrufen will 
  return searchResult || null;

  Versuch 2.1.:

  function findByCitySubString(employees, string) {
  const searchResultCity = employees.filter((string) => {
    return employees.string; // das läuft ins leere, string (bzw. argument result unten) wird nicht nochmal aufgerufen
  });
  return searchResultCity || null;
}

  xx> ich muss statt
  return employees.string;
  irgendwas mit nem logischen operator machen, aber nicht ===
  also vielleicht doch includes()

  Versuch 2.2.:

  function findByCitySubString(employees, string) {
  const searchResultCity = employees.filter((employee) => {
    employee.city.includes(string); // nee, das macht auch keinen Sinn, weil .includes() ja einen boolean returned, hier brauche ich aber was anderes
  });
  return searchResultCity || null;

  xx> includes() returns a boolean, ich brauche aber eine modifizierte, auf dem string/result basierende Teilmenge des array

  Versuch 2.3 - ab hier in Anlehnunh an Bsp aus mdn docu zu find() method:

  ==> also doch was anderes?
  ==> laut mdn ist filter+includes aber ein use case: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  function findByCitySubString(employees, string) {
  return employees.filter((employeeObject) => // soll den als argum aufgenommenen string filtern
  // soll die elements des array in den param aufnehmen
    employeeObject.city.toLowerCase().includes(string.toLowerCase()) // soll die als argum aufgenommenen array elemente nach key "city" durchgehen und returnen
  );
}

  Versuch 2.4

function findByCitySubString(employees, string) {
  const searchResultCity = employees.filter((employee) // nimmt in der const auf, was vom array(im Argument) durch filter() als shallow copy über bleibt
  =>
    employee.city.toLowerCase().includes(string.toLowerCase) // gehe in den elements(=objects) des array - im param abgebildet - und prüfe, ob sie den string(=result(der search unten) enthalten)
  );
  return searchResultCity || null; // return if filter succesful, else null
}

  xx> output in der app immer noch undefined

}

  Versuch 2.5

  function findByCitySubString(employees, string) {
  const searchResultCity = employees.filter((employee) =>
    employee.city.toLowerCase().includes(string.toLowerCase())
  );
  return searchResultCity || [];
}
  
xx> immer noch undefined

es fehlt wohl noch trim

Logik outline:
const trimmedString = string (also der zweite param), der via trim() und lowerCase() geglättet wird
dann die Funktion wie seit 2.4, also nimm strin/result und gehe durch die obj. des via argum/param aufgenommenen employees aray
gib das als shallow copy des array zurück

Verusch 2.6

function findByCitySubString(employees, string) {
  const trimmedString = string.trim().toLowerCase();
  const searchResultCity = employees.filter(
    (employee) => employee.city.toLowerCase().includes(trimmedString) // vgl. 2.5., kann ich das nicht auch hier reinschachteln?
  );
  return searchResultCity || [];
}
// ich komme einfach nicht zum Ergebnis

*/

function findByCitySubString(employees, string) {
  return employees.find((employee) => employee.city.includes(string));
}

// Bonus:
// You want to find any employee whose profession includes a specific substring
// AND who is older than a specific age

function findByProfessionSubStringAndAge(employees, string, age) {
  return employees.find(
    (employee) => employee.profession.includes(string) && employee.age > age
  );
}

// ------------------------------------------------------------------------------
// ----- The following code is used for the preview. Don't touch it please. -----

const form1 = document.querySelector("[data-js='form1']");
const form2 = document.querySelector("[data-js='form2']");
const form3 = document.querySelector("[data-js='form3']");
const form4 = document.querySelector("[data-js='form4']");
const employeesList = document.querySelector("[data-js='employees-list']");
const exercise1 = document.querySelector("[data-js='exercise1']");
const exercise2 = document.querySelector("[data-js='exercise2']");
const exercise3 = document.querySelector("[data-js='exercise3']");
const exercise4 = document.querySelector("[data-js='exercise4']");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise1.innerHTML = "";
  const result = findByLastName(employees, event.target.exercise1.value);
  if (result) {
    exercise1.append(createCard(result));
  } else {
    exercise1.textContent = "No results";
  }
});
form2.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise2.innerHTML = "";
  const result = findById(employees, event.target.exercise2.value);
  if (result) {
    exercise2.append(createCard(result));
  } else {
    exercise2.textContent = "No results";
  }
});
form3.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise3.innerHTML = "";
  const result =
    event.target.exercise3.value.trim() !== ""
      ? findByCitySubString(employees, event.target.exercise3.value)
      : null;
  if (result) {
    exercise3.append(createCard(result));
    console.log();
  } else {
    exercise3.textContent = "No results";
  }
});
form4.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise4.innerHTML = "";
  const result = findByProfessionSubStringAndAge(
    employees,
    event.target.exercise4.value,
    event.target.exercise4b.value
  );
  if (result) {
    exercise4.append(createCard(result));
  } else {
    exercise4.textContent = "No results";
  }
});
function createCard(employee) {
  const card = document.createElement("section");
  card.classList.add("card");
  card.innerHTML = `<h2>${employee.firstName} ${employee.lastName}</h2>
  <p>ID: ${employee.id}</p><p>Profession: ${employee.profession}</p><p>Phone: ${employee.phone}</p><p>Email: ${employee.email}</p><p>Adress: ${employee.address}</p><p>City: ${employee.city}</p><p>Age: ${employee.age}</p>`;
  return card;
}
employees.forEach((employee) => {
  const card = createCard(employee);
  employeesList.append(card);
});
