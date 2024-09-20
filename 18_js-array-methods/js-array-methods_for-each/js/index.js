const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// const body = document.querySelector("body");

// Task 2

function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  document.body.append(colorBox);
}

// colors.forEach((color) => {
//   renderColorBox(color);
// });

colors.forEach(renderColorBox);

/* Task 1:

Verusch 1:

Struktur Lösung:
1. neues div erstellen via createElem
2. dem neuen div eine Klasse gebem
3. in der Klasse den Value von bcg ändern
4. divs appenden

Ansätze:
erstmal nur divs mit text
divs mit Klasse

// const body = document.querySelector("body");

colors.forEach((color) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.setAttribute("background-color" color);
  document.body.append(colorBox);
});

das funktioniert auch nicht, weil man einfach direkt auf den style zugreifen muss

bzw. 

// const body = document.querySelector("body");

colors.forEach((color) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.classlist.setAttribute("background-color" color);
  document.body.append(colorBox);
});

hat gar nicht funktioniert, weil man das neu erstellte HTML element direkt styled
Für die Hintergrundfarbe muss man direkt auf style.backgroundColor zugreifen, weil background-color kein Attribut ist, sondern eine CSS-Eigenschaft.
Außerdem gibt es auf colorBox.classlist. kein "setAttribute". classList ist nur für set, remove, toggle von classes usw

LÖSUNG:

colors.forEach((color) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  document.body.append(colorBox);
});

*/

/* Task 2:

Verusch 1:

einfach den fn body von der forEach in eine neue fn

function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  document.body.append(colorBox);
}

Dann die fn in der forEach callen

colors.forEach((color) => {
  renderColorBox(color);
});

Frage an mich selbst: warum nuss ich den gleichen Parameter (color) in der fn renderColorBox und der method forEach?
-> die Lösung war zwar technisch richtig, aber nicht optimal.

Merke:
Die forEach-Methode akzeptiert eine Callback-Funktion. 
Diese Funktion wird für jedes Element des Arrays aufgerufen und erhält dieses Element als Argument. 
Daher kann ich renderColorBox direkt als Referenz übergeben, ohne sie explizit aufzurufen oder Parameter anzugeben.

Lösung:

function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  document.body.append(colorBox);
}

colors.forEach(renderColorBox);

=> einfach die deklarierte fn renderColorBox als call back fn in () callen
Annme: dann brauche ich nicht zweimal die selben param zu rufen

*/
