import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { useState } from "react";
// import { getD6Roll } from "../../utils"; I don't need this, because this is in the App and was originally stated to import it from here to DB6Button
import { getD6Roll } from "./utils"; // this is crucial, because the getD6roll is called within the set fn within the event handler
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

/*

1) Problem

The App renders a three-dimensional model of a six-eyed dice. 
By clicking on the rendered dice, a short animation gets triggered and the
model simulates a dice roll which ends on the model showing one side of a dice.

The animation works as intended, but the value of 1 to n dice rolls doesn't get saved anywhere.
This is because all the logic necessary to provide this functionality is currently within the DB6 Button.
The DB6 Button is a child comp of App and it doesn't contain all the components in itself to fully execute the intended logic.
However, the App does.

Therefore we need to lift the code containing logics and necessary variables/states up to the App.


2) Steps and Plan

TURN DB6BUTTON COMP INTO REPRESENTATIONAL COMP AND LIFT STATE AND STATE MANAGEMENT UP TO APP COMP

2) 1. Copy and pase rolls state, const handleRolls (event handler containg set function) and const currentValue to App
This solves the problem of having the logic, states and variables necessary for the whole app within the limited scope of the child comp of App.

2) 2. Add the props value and onRoll to the DB6Button fn and it's respective JSX Element, so that App can communicate the
necessary event handling logic to DB6Button, especially the execution of the dice roll itself which happends inside.

2) 3. Change the value of the JSX element History's attribute rolls= to the value of the state rolls. 
This solves the problem of the history of values of dice rolls (1 to n) not being displayed in the front end.

STORE ROLLS STATE IN LOCAL STORAGE


3) Mock Code and Notes on solving the challenge

My plan was almost complete, only missing one crucial step:
Changes on the import statements in DB6Button and App:

Change log DB6Button:
- delete useState, because it's not needed anymore
- delete import of getD&roll fn from utils, because it's not needed anymore

Change log App:
- add useState, because we have the state rolls in here now
- add import statement getD&roll fn from utils, because the getD6roll is called within the set fn within the event handler here now




*/
