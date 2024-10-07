import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
  }

  // console.log(animals); clog needs to be here because otherwise it can't access the mutated stare var

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}

/*

🐕

1) Understanding problems and requirement

Data flow:
Form takes input from submission and generates an object and declares it as value of the const data
Through the prop "onAddAnimal", the const data = (values of form input) is called upon in the App
In the App, the fn handleAddAnimal (called in the prop) shall add the data to the state var/animal array

Summary: 
flow of data starts in the Form component, Form as a child comp of App hands over this data by communcation though props,
Data from Form is added to the array in the App itself where it's stored 


Problem 1
The fn handleAddAnimal only logs the data. It needs to add it to the array/state var

Problem 2
The new Animals needs to have an ID assigned to it like the already existing animals


2) Plan and steps

2) 1. for Problem 1

add logic to the handleAddAnimal so that the data flow can be finalized
-> use array deconstruction and add new animal

==> 👍🏻 worked 

2) 1. for Problem 2

import UID method
prepend id:uid() to the newly created object in the animals array

==> 👍🏻 worked 

3) Mock Code

2) 1.

handleAddAnimal {
call the set fn of animal state var ( ... get all elements of the array, add the new one )
}

2) 2.

function handleAddAnimal(newAnimal) {
    setAnimals([...animals, id:uid(), newAnimal]);
  }

That doesn't work, because I havn't deconstructed the newAnimal object properly
without this step, I can't inject the id into it

2nd approach:

handleAddAnimal {
call the set fn of animal state var 
  ( ... get all elements of the array, 
   NEED TO ADD A NEW OBJECT HERE
    {use UID to get a random ID, 
    ...append the other key value pairs of the object behind the ID} )
}


*/
