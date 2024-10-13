import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState(false);
  // let isActive = false; // variable to be replaced by state fn

  function handleClick() {
    setActive(!isActive);
    // isActive = !isActive; // fn statement to be changed because this is not useful to inform Components in react
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? `Deactive` : `Activate`}
      </button>
    </main>
  );
}

/*
1) Rephrase the problem:
Our App shall make the div with .box change it's bcg by toggling the -box--active dynamically. The button within the App shall trigger the class change.
Currently, the fn handleClick() changes the value of let isActive between booleans. This is not working, because in react, we can't "inform" ternary operators within components like that.
Rather, we need to change a state.

2) Plan & Steps

1. import state hook

2. turn let isActive into a useState-function
initial value shall be "false"
"set" fn shall be setActive


3)
state fn: 
const [isActive, setActive] = useState(false);
- isActive: the variable to store the booleans
- setActive: the fn to set state => toggle value of isActive between booleans

fn handleClick () {
 setActive(!isActive); // this shall switch booleans and hence state
 }


*/
