/* Erster Versuch

import getRandomColor from "../../utils/randomColor.js";

const randomColor = getRandomColor();

export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = randomColor;
    return circle;
  });
}

const randomColor
xx> hier fälschlicherweise außerhalb der fn deklariert
==> muss in den eventListener - als let randomColor

return circle
xx> das statement ist hier fälschlicherweise im eventListener verschachtelt
==> es muss außerhalb der der =>fn des eventListener stehen
==> es muss statement der functionCircle sein, weil es mit createElement zusammenhängt
==> der eventListener ist nur für die zufällige Farbvergabe zuständig

*/

import getRandomColor from "../../utils/randomColor.js";

export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    let randomColor = getRandomColor();
    circle.style.backgroundColor = randomColor;
  });
  return circle;
}
