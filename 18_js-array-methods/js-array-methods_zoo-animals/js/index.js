/* KEY LEARNING ⭐️

wenn ein *loop* in einer *function* duruch ein data set iteriert
und basierend auf einer Bedingung "return true" geben soll,
dann muss das else return false statement teil der **fn** und nicht des **loops** sein.

In cases where you're searching through data or evaluating a condition across multiple elements, your final action (e.g., returning false) should typically come after the loop, unless you find what you're looking for early, in which case you can return immediately.

die params hier haben ermöglicht, dass die fn, wo sie unten gecalled wird,
gemäß fn Aufbau den zooAnimals array und die const searchQuery aus der fn aufzunehmen.

*/

import { zooAnimals } from "../utils/db.js";

// This website uses a function to check wether a specific animal is part of the zoo or not but it's not working correct.
// Please implement the function 'hasAnimal' that gets an array of animals and an animal name
// The function should return 'true' if the animal name is included in the array or 'false' if not.

function hasAnimal(animals, animalName) {
  for (let i = 0; i < animals.length; i++) {
    // Check if there's a match for the current animal
    if (animals[i].toLowerCase() === animalName.toLowerCase()) {
      return true; // Return early if match is found
    }
    // No else here, just keep going to the next element
  }
  // If no match is found after the loop finishes, return false
  return false;
}

/*

Lösung:

filter() auch nicht optimal, weil das einen array aus zooAnimals ausgibt, der auf urpsrünglichen array basiert

==> ein for loop kann hier angewendet werden


Zweiter Lösungsversuch:

==> funktioniert jetzt, weil "else return false" nicht teil des loops ist 
und deshalb erstmal der ganze loop durchiteriert wird
==> die method toLowerCase() macht die fn case sensitive

function hasAnimal(animals, animalName) {
  for (let i = 0; i < animals.length; i++) {
    // Check if there's a match for the current animal
    if (animals[i].toLowerCase() === animalName.toLowerCase()) {
      return true;  // Return early if match is found
    }
    // No else here, just keep going to the next element
  }
  // If no match is found after the loop finishes, return false
  return false;
}




Erster Lösungsversuch:

function hasAnimal(animals, animalName) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].toLowerCase() === animalName.toLowerCase()) {
      return true;
    }
    return false;
  }
}

xx> funktioniert nur bedingt, weil ich das 'return false' statement innerhalb des loops platziert habe
xx> der loop stoppt also direkt, wenn die Eingabe nicht bereits dem ersten element des array entspricht
xx> 💡 weil bei einem loop durch ein dataset if/else direkt an jedem einzelnen element ausgeführt und nicht an allen
xx> 💡 wenn beide return statement, also if & else beide im loop stehen  
xx> ❌ "African Wild Horse" input funktioniert daher, aber das entspricht nicht den solution requirements



Versuch 2

Ansatz:
- nochmal genau die Aufgabenstellung anschauen
// Please implement the function 'hasAnimal' that gets an array of animals and an animal name
--> ich muss bestimmt die array method map() verwenden
// The function should return 'true' if the animal name is included in the array or 'false' if not.
--> vllt hier einfach erstmal nur ein true/false check bauen, ohne auf den Kontext ab const = AnimalList … achten

xx> Annahme nicht optimal, weil map() v.A. verwendet wird, um elements in einem array zu transformen
wir wollen hier aber einfach nur checken


Versuch 1:

Ansatz:

- ich brauche hier map, weil die method etwas returned
- ich brauche einen neuen Array aus den zooAnimals
- und muss daraus wiederum ein animal rausgeben können

function hasAnimal(animals, animalName) {
  const allAnimals = zooAnimals.map(animals);
  const animal = allAnimals.value;
  // return animal;
}

hat nicht funktioniert, vielleicht weil die Werte des arrays zooAnimals nur im Kreis referenziere

*/

// Bonus:
// Can you modify the function so that it works case-insensitive?
// This means it should return true, even if you search for 'sheep' or 'SHEEP' or 'sHeEp'.
// Hint: Remember the 'map' function

// -------------------------------------------------------------------------------------
// ----- The following code is used for the browser preview. Please don't touch it -----

const animalList = document.querySelector("[data-js='animalList']");
const animalForm = document.querySelector("[data-js='animalForm']");
const output = document.querySelector("[data-js='output']");

animalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value;
  output.textContent = "";
  if (searchQuery.trim() === "") {
    return;
  }
  const result = hasAnimal(zooAnimals, searchQuery);
  output.textContent = result
    ? `Yes, we have ${searchQuery}`
    : `No, we don't have ${searchQuery}`;
});

zooAnimals.forEach((animal) => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = animal;
  animalList.append(tag);
});

/* Compelete Breakdown

Overview of hasAnimal Function:
js
Code kopieren
function hasAnimal(animals, animalName) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].toLowerCase() === animalName.toLowerCase()) {
      return true;
    }
  }
  return false;
}
Key Elements:
animals: This is the array of animals that you are searching through (in this case, zooAnimals).
animalName: This is the specific animal you are searching for — it's the user’s search query from the form input.
The Bigger Picture:
How the Function is Called (Connection to the Search Query):
The user types an animal name into the search box on the website and submits the form.
When the form is submitted, an event triggers, which calls hasAnimal and passes two arguments:
The list of zoo animals (zooAnimals array).
The animal name the user searched for (from the form input field).
Let’s look at the specific part of the code that makes this connection:

js
Code kopieren
animalForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the form from actually submitting (reloading the page)
  
  // This is the value typed in by the user (the search query)
  const searchQuery = event.target.searchQuery.value;

  // Clear any previous output
  output.textContent = "";

  // Check if the search query is empty
  if (searchQuery.trim() === "") {
    return;
  }

  // Call hasAnimal function with zooAnimals and the user's search query
  const result = hasAnimal(zooAnimals, searchQuery);

  // Output the result to the user
  output.textContent = result
    ? `Yes, we have ${searchQuery}`
    : `No, we don't have ${searchQuery}`;
});
Breakdown:

event.target.searchQuery.value:
This gets the value of the search input field (what the user types).
event.target refers to the form, and searchQuery is the name attribute of the input field in the form. So event.target.searchQuery.value grabs the value the user entered into that field.
This value is stored in the searchQuery variable.
Calling hasAnimal(zooAnimals, searchQuery):
zooAnimals is the array that contains all the animals in the zoo.
searchQuery is the user's input (the animal name they are searching for).
These two values are passed as arguments to hasAnimal(animals, animalName).
So, in this case, animals becomes zooAnimals (the array of all zoo animals), and animalName becomes searchQuery (the name of the animal the user is searching for).
The Role of the hasAnimal Function:
The function hasAnimal(zooAnimals, searchQuery) checks whether the user’s input (searchQuery) matches any animal in the zooAnimals array.
Inside the function, the loop iterates through each animal in the array and checks if it matches searchQuery (converted to lowercase for a case-insensitive comparison).
If a match is found, the function returns true. If no match is found after checking all the animals, it returns false.
Displaying the Result:
The result of the hasAnimal function is stored in the result variable.
The output.textContent then updates the webpage with a message based on whether result is true or false:
If result is true: It displays "Yes, we have [searchQuery]".
If result is false: It displays "No, we don't have [searchQuery]".
Example:
Let’s say the user types "Tiger" in the search box.
The searchQuery becomes "Tiger".
hasAnimal(zooAnimals, "Tiger") is called.
The hasAnimal function loops through the zooAnimals array to see if "Tiger" (or any case variation, thanks to .toLowerCase()) is present.
If it finds "Tiger" in the list, the function returns true.
The output message "Yes, we have Tiger" is displayed to the user.
Visualizing the Flow:
User Action: Types "Tiger" in the search box.
Form Submission: The form is submitted.
Search Query: "Tiger" is captured by event.target.searchQuery.value.
Function Call: hasAnimal(zooAnimals, "Tiger") is called.
Loop in hasAnimal: It loops through the zooAnimals array:
Compares "tiger" (lowercased) to each animal in the array (also lowercased).
Finds a match with "Tiger", so it returns true.
Display Output: output.textContent = "Yes, we have Tiger" is shown to the user.
Key Takeaways:
animals parameter in hasAnimal is the list of all animals (zooAnimals array).
animalName parameter is the animal the user is searching for (from the search query).
The parameters allow the function to connect the array of animals and the user’s input so that it can search for a match.


*/
