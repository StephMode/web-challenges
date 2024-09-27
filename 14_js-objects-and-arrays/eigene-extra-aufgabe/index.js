const data = [
  {
    name: "John",
    age: 30,
    address: { city: "New York", zip: 10001 },
    hobbies: ["reading", "swimming", "coding"],
    work: { company: "Tech Corp", position: "developer" },
  },
  {
    name: "Jane",
    age: 28,
    address: { city: "Los Angeles", zip: 90001 },
    hobbies: ["drawing", "biking"],
    work: { company: "Design Studio", position: "designer" },
  },
  {
    name: "Mike",
    age: 35,
    address: { city: "Chicago", zip: 60601 },
    hobbies: ["gaming", "hiking"],
    family: {
      spouse: "Laura",
      children: [
        { name: "Tom", age: 5 },
        { name: "Anna", age: 3 },
      ],
    },
  },
];

// EXERCISE 1
// Ändere die Variable nameOfFirstPerson so, dass sie den Namen der ersten Person enthält.
const nameOfFirstPerson = data[0].name; // Übung hier
console.log(nameOfFirstPerson);

// EXERCISE 2
// Ändere die Variable cityOfSecondPerson so, dass sie die Stadt der zweiten Person enthält.
const cityOfSecondPerson = data[1].address.city; // Übung hier
console.log(cityOfSecondPerson);

// EXERCISE 3
// Ändere die Variable firstHobbyOfThirdPerson so, dass sie das erste Hobby der dritten Person enthält.
const firstHobbyOfThirdPerson = data[2].hobbies[0]; // Übung hier
console.log(firstHobbyOfThirdPerson);

// EXERCISE 4
// Ändere die Variable positionOfFirstPerson so, dass sie die Position der ersten Person in ihrer Arbeit enthält.
const positionOfFirstPerson = data[0].work.position; // Übung hier
console.log(positionOfFirstPerson);

// EXERCISE 5
// Ändere die Variable nameOfMikesFirstChild so, dass sie den Namen des ersten Kindes von Mike enthält.
const nameOfMikesFirstChild = data[2].family.children[0].name; // Übung hier
console.log(nameOfMikesFirstChild);

// EXERCISE 6
// Ändere die Variable zipCodeOfSecondPerson so, dass sie die Postleitzahl der zweiten Person enthält.
const zipCodeOfSecondPerson = data[1].address.zip; // Übung hier
console.log(zipCodeOfSecondPerson);

// EXERCISE 7
// Ändere die Variable secondHobbyOfFirstPerson so, dass sie das zweite Hobby der ersten Person enthält.
const secondHobbyOfFirstPerson = data[0].hobbies[0]; // Übung hier
console.log(secondHobbyOfFirstPerson);

// EXERCISE 8
// Ändere die Variable spouseOfThirdPerson so, dass sie den Namen des Ehepartners der dritten Person enthält.
const spouseOfThirdPerson = data[2].family.spouse; // Übung hier
console.log(spouseOfThirdPerson);

// EXERCISE 9
// Ändere die Variable companyOfSecondPerson so, dass sie den Firmennamen der zweiten Person enthält.
const companyOfSecondPerson = data[1].work.company; // Übung hier
console.log(companyOfSecondPerson);

// EXERCISE 10
// Ändere die Variable ageOfMikesSecondChild so, dass sie das Alter des zweiten Kindes von Mike enthält.
const ageOfMikesSecondChild = data[2].family.children[1].age; // Übung hier
console.log(ageOfMikesSecondChild);

data[2].family.children[1].age = 19;
console.log(data[2].family.children[1].age);
