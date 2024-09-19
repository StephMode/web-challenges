console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

// erster Versuch:

// die Funktion habe ich nicht gebraucht, die statements gehören in den loop
// mit programmingLanguage funktioniert das nichtm, weil die const nur im loop declared ist und mit dem array selbst auch nicht
// function createListproLang() {
//   // const ol = document.createElement("ol");
//   // main.append(ol);
//   // const li = document.createElement("li");
//   // // li.textContent = programmingLanguages;
//   // ol.append(li);
// }

// zweiter Versuch
// nochmal const und method deklarieren

const ol = document.createElement("ol");
main.append(ol);
// muss hier oben stehen, damit upon loop execution nur eine ol erstellt wird

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

// erster Versuch

// for (const programmingLanguage of programmingLanguages) {
//   const ol = document.createElement("ol");
//   main.append(ol);
//   const li = document.createElement("li");
//   li.textContent = programmingLanguage;
//   ol.append(li);
// }

// Annahme: die Funktionalität als Sequenz von Statements innerhalb des loops, weil die const progLanguage ja nur im Loop defineirt ist
// Ergebis: grundsätzlich Konzept verstanden, aber Ausführung noch nicht ganz richtig, ich kreiere mehrere ol mit diesem loop ❌

// zweiter Versuch

for (const programmingLanguage of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = programmingLanguage;
  ol.append(li);
}
/*
Summary of my understanding:
Der Loop macht folgendes:
1. Loop: gehe wiederholt durch den array programmingLanguages und fasse die iterations jeweils in der const programmingLanguage
2. Statement 1: erstelle für jeden value in der const programmingLanguage aus dem array ein li
3. Statement 2: gib jedem li einen value aus dem array, der in der const programmingLanguage gespeichert ist
4. Statement 3: hänge jedes so erstellte li an die ol 

Refined Summary:
Loop: The for...of loop goes through the programmingLanguages array, and during each iteration, it assigns the current array item (i.e., one programming language) to the variable programmingLanguage.
Statement 1: For each iteration (i.e., for each value in the programmingLanguages array), the loop creates a new <li> element (a list item).
Statement 2: The textContent of each <li> is set to the current value of programmingLanguage (i.e., the programming language being iterated over).
Statement 3: Each newly created <li> is appended to the already existing <ol> (the ordered list that was created before the loop).


*/

// --^-- write/change code here --^--
