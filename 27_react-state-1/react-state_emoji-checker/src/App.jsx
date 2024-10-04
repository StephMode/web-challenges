import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?"; // given variable, not needed
  const [code, addCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    // addCode(emoji + code);
    // code + emoji;
    addCode(() => code.concat(emoji));
  }
  console.log(code);

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>
      <button type="button" onClick={() => addCode("")}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}

/*
1) Rephrasing the problem

The last child in the <div> within the App comp which contains a shorthand
if-statement. If it's condition (value of validCode) is matched, it renders a success message as a <p>.

There is no logic in the App comp to lock/in store a sequence of values of the respective
emoji button clicks.

The input values, being strings(=emojis) need to be stored in order to be comparable to validCode.

fn handleClick doesn't "lock in" anything anywhere, it just logs to the console.
let code can't "take in" any values due to being a string. It could only be reassigned.

As there is no limit to click-events, there shall be a check of the the "locked in" values after each event.

2) Plan and steps for solution

What we need:
- declare state var for code (replace let code with it)
-- of datatype array
-- initial state [ ]
-- set fn needs to push values of clicks into array

- handleClick fn
-- contains set fn of state var
-- fn shall use .push()

Steps
1. import react state
2. declare state code
3. implement logic into handleClick


3) Mock Code

// 1st try:

const [code, addCode] = useState([]);

function handleClick(emoji) {
    addCode(code.push(emoji));

    console.log(emoji);
    console.log(code);
    // console.log(code);
  }

xx> works as intended upon 1st click, but not upon consecutive clicks
according to clog(), both the button and it being pushed to the array is logged

Solution attempt: make the push method somehow take more than one element
xx> now it's not working at all

// 2nd try:

first check wether .push() is the correct method to begin with
[ ] abgleichen ob ein array ["hello"] überhaupt einem string "hello" equal ist
xx> ist nicht equal, also pivot

-> wenn ja: weiter
-> sonst: pivot with step 3.

const [code, addCode] = useState(); // value (initial and set) needs to be string

function handleClick(emoji) {
addCode(emoji + emoji) // just add emoji onto each other, this should cover both inital and consecutive input

that doesn't work either
also tried concat(), but that also didn't work

I need to find out: "react store consecutive inputs in a state"

// 3rd try:

the add function shall call a function that CONCATINATES the value of the click event to the code var

addCode( () => code.concat(emoji) )

addCode  ( => shall concatenate emoji to code  )

⭐️ worked

*/
