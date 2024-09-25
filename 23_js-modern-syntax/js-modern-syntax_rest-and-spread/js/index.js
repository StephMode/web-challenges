console.clear();

// EXERCISE 1
// a) Destructure the "person" object, extract the variables "age" and "contact".
// b) Use the rest parameter to collect the values of "name", "email", and "phone"
// and put them into "contact".
// c) Make sure to export your variable as in the example below to make the tests work.

const person = {
  name: "Jane Doe",
  age: 32,
  email: "jane@doe.com",
  phone: "12345",
};

export const { age, ...contact } = person;
// 💡 js erkennt automatisch, dass alle nicht explizit genannten und demzufolge extrahierten key value pairs unter ...REST subsumiert werden

// 1. Versuch
// export const { age, {name, email, phone}: "contact" } = person;
// die Syntax funktioniert so nicht, warum?

// example: export const {value 1} = myObject;

// EXERCISE 2
// Use array destructuring to extract the variables "first" and "second";
// all other items should go into a variable called "restOfList".

const list = ["one", "two", "three", "four", "five"];

export const [first, second, ...restOfList] = list;

// EXERCISE 3
// a) The `add` function does not work because it needs an array as argument.
// b) Use the rest syntax with the `allNumbers` parameter to fix it.
// c) Make sure you understand what the rest syntax does here.
// d) Note that the optional chaining `?.` is used to prevent an error to happen.

function add(...allNumbers) {
  return allNumbers.reduce?.((a, b) => a + b);
}
// 💡 Lösung: rest syntax muss hier in den param. So werden einzelne arguments als integer values im function call in einen array umzuwandeln

// Zusammenfassung meines Verständnis:
// reduce() in a nutshell: iteriert über einen array und gibt einen Wert zurück
// diese array method muss zwei Argumente an die callback fn übergeben:
// 1. param: der accumulator = der singuläre Wert, den die fn, in der die methode genutzt wird, zurückggibt => hier: a
// 2. param: der einzelne Wert im array, steht also stellvertretend für die values der elemetns im array => hier: b

// Annahme, die fn add {} funktioniert nicht, weil sie keienn array hat, auf den sie zurückgreifen kann -> ich muss mir via rest values in den array holenm

export const sum = add(3, 2, 3, 2, 1, 2, 3, 4);
// export const sum = add([3, 2, 3, 2, 1, 2, 3, 4]); // TEST: funktioniert nicht mehr, weil das jeztzt wie ein array im array behandelt wurd
console.log(sum); // das hier wird als 'undefined' ge-log-ged, weil der add() call keinen param zurückgibt

// export const [...alleSummanden] = sum; // kann ich nicht adressieren, before die const sum deklariert wird
// export const [...alleSummanden] = sum; // funktioniert nicht, weil "sum" undefined, klar, hat ja auch als const keinen direkten value
// export const [...alleSummanden] = allNumbers; // funktioniert nicht, weil "addNumbers" undefined
// export const addNumbers = [...sum[alleSummanden]]; // ffunktioniert nicht
// 👆🏻 funktioniert alles nicht, weil ich versuche, const sum als array zu dekonstruieren, obwohl es gar keine array struktur hat

// EXERCISE 4
// a) Below, the `add` function is called with an array as argument.
// b) Use the spread syntax with the `numbers` argument to fix this.
// c) Make sure you understand what the spread syntax does here.

const numbers = [3, 2, 1];
export const result = add(...numbers);
// die fn add hat ja oben rest syntax im param bekommen. Jetzt rufe ich einen array als argum auf. Mit der rest syntax im argument des fn call kehre ich die rest sytnax aus dem param quasi wieder um
// -> fast richtig, hier nutze ich im fn call aber SPREAD syntax und nicht REST syntax, korrekt ist also
// die fn add hat ja oben REST syntax im param bekommen. Jetzt rufe ich einen array als argum auf. Mit der SPREAD syntax im argument des fn call kehre ich die REST sytnax aus dem param quasi wieder um

// EXERCISE 5
// a) Create a variable `allFruits` which contains `anotherFruit` and `fruits`
// as a plain array (and in this order).
// b) Use the spread syntax to achieve this.
// c) Remember to export `allFruits`.

const fruits = ["apple", "banana", "orange", "papaya"];
const anotherFruit = "cherry";
export const allFruits = [anotherFruit, ...fruits];
// bei rest and spread einfach als würde man eine "reguläre" neue const deklarieren
// export const [...fruits , anotherFruit] = allFruits;
