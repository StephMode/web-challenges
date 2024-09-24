console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

export const { course } = company;

// example: export const {value1} = myObject;

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

const user = { name: "John", years: 30 };

export const { name, years: age, isAdmin = false } = user;

// das war mein dritter Ansatz, richtig
// merke: "prop into variable" = einfach aufrufen
// merke: " 'xy' prop into variable 'ab'" = xy : ab

// 1st attempt: my intial code, attempt to debug
// console.log({ const {name} = name, const {age} = age, isAdmin = false })

// 2nd attempt: einzelne const?
// export const { name } = user;
// export const { age } = user;
// export const { isAdmin: false } = user;
// -> nein, weil destructuring alleine schon "distinct variables" ergibt

// console.log(user);

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

export const { name: dogName, breed: dogBreed, age: dogAge } = dog;

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

export const { lastName: personLastName, ...moreInformation } = person;
// ...person -> ...moreInformation hat es gefixed

// Versuch 1
// export const { lastName: personLastName, ...person} = person;
// funktioniert wahrsch. nicht, weil ich hier in der rest syntax den Namen des urspr. objects, mit dem es deklariert wurde, nochmal aufrufe
