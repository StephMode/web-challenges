import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js"; // sorgt dafür, dass neue "Card" an main mit #root appended wird

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);
/* was macht das hier:
mach eine const "firstCard", diese entspricht der fn Card, 
  die wiederum ein HTML element erstellt
    durch das argum nimmt die fn in ihren statements, die DOM kreieren und beeinflussen, die Daten von const EXAMPLE_DATA 
BROWSER OUTPUT: Karte mit Daten aus array
*/

// was muss ich hier machen: const bilden, die card entspricht, in card iwie die daten aus dem fetchrender bekommen
fetchDataAndRender();
// falsch, hier muss ich gar nichts machen, hier wird die function nur gecalled
// look: die fn heißt fetchData AND render

// console.log(firstCard);
// console.log(fetchDataAndRender());

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();
  data.results.forEach((character) => {
    const card = Card(character); // in der const card wird nun qua Card(character) auf Grundlage der gefetchten Daten elemente im DOM kreiert
    renderElement(card); // ohne diese fn werden daten zwar gefeteched, aber nicht gerendert, vgl clog
    console.log(card);
  });
}

/*

Versuch 1:

hier muss ich doch return, damit das weiter benutzt werden kann? 
XX> Jein, ich muss hier keine "data" returnen, weil ich die daten aus der fn in diesem fall nicht wo anders ausgeben will

Versuch 2:

lies nochmal: die fn heißt fetchData A-N-D  R-E-N-D-E-R
ich will also zum einen die data fetchen und diese in elemente im DOM umwandeln

ich muss also die data > results mit einer forEach method durchiterieren

data.results. // =das element des array, aus dem ich die daten ziehen will
  forEach(**elements**) =>
    const CardData = **elements**.results.value // also gehe durch die results in der data base gehen, die durch den param "elements" aufgerufen werden
  Card(CardData) 


Das ist mein Code:

async function fetchDataAndRender() {
  const response = await fetch("https://swapi.py4e.com/api/people/");
  const data = await response.json();
  console.log(data);
  // return data; // -> ab hier würde fn stoppen
  data.results.forEach((elements) => {
    const cardData = elements.results.value; // xx> ich muss nicht nochmal auf meine Daten zugreifen
    Card(cardData); // xx> vgl. voriges statement, der Schritt hier überflüssig, weil ich direkt Card() mit
                        param element callen und durchiterierte "results"-daten im array als arg (elements) aufrufen kann

  });
  xx> die renderElement() aus utils.js fehlt noch, deshalb wird nichts in den browser gerendert
  Denn: erst muss Card() "card"-elemente im DOM erstellen und diese mit Inhalt füllen => Card() return-ed die dann
    dann muss renderElement() die dann an den main #root anhängen 


*/
