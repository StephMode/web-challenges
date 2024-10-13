import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(holiday);
    console.log(date);
    event.target.elements.holiday.focus();
  }

  // function handleHolidayInput() {
  //   setHoliday(data.holiday);
  //   console.log(holiday);
  // }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          value={holiday}
          onChange={(event) => setHoliday(event.target.value)}
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{`${holiday}`}</span>
      </p>
      <p>
        Date: <span className="output">{`${date}`}</span>
      </p>
    </div>
  );
}

/*

1) Problem/Requirement

The app component needs to get access to the form submit data

Based on the data, the content of the <p .output> under <h2> shall be rendered dynamically

there shall be state var for the form inputs

2) Steps and Plan

1. Implement code to capture form data in a newly created object,
to make it accessible for the form
(==> ✅)

xx> actually ❌, program not working yet, can't access values of the data obj
xx> ?? however it is not recommended using this as defaukt, but I don't see another way right now

// code not working
export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }


Maybe I have to wire the state vars using "controlled inputs"

==> ✅ that seems to work
approach with controlled inputs makes sense, because we have a really narrow use case here



2. declare a state var for both "holday" and "date", where the input upon submission is reflectet
2.1. import statement
2.2 two states
- holiday, setHoliday
- date, setDate
==> ✅

3. declare functions to handle inputs amd update the state vars based on the Object from the handleSubmit funciton

based on "controlled inputs"

- add value attributes to JSX for inputs
- add onChange to JSX for inputs

4. implement template literals in the <p> outputs to dynamically render updated value of states
xx> 🟡 definitely the right step, but later, rather 4.



3) Mock Code

2)3.

fn handleHolidayInput () { // function to nest set fn from state var in
setHoliday(data.Holiday) (set the value of the state var to the value of the key index pair "holiday")
clog to check
}
xx> ❌ not working

1)

declare state vars right away

within the



*/
