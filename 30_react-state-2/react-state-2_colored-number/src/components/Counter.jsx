import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

/*
1) Problem:

Button click doesn't change anything
"value" for coloredNumber isn't mutable by click on button, thus no color change can happen


2) Plan and steps:

do these in

1. declare state var for counter: counter, setCounter


2. implement event handler in button clicks with fn setCounter


2. declare fn for incrementation/decrementation logic

3. implement state var counter as value of value of coloured number

3) Mock Code


Back to 1st attempt:

2. eventhandler for button

my intial code
onClick={setCounter(counter + 1)}

Benjamins code that's working:
onClick={() => setCount(count + 1)}
Why is this working?
- The set function in itself can not return a new value and thus update a state.
- The void => fn contains an implicit return statement and thus modifies the value of count

*/

/* failed attempts

2) Plan:

✅ 1. declare state var for counter: counter, setCounter
==> but do it in the parent= App

// 2. implement event handler in button clicks with fn setCounter
xx> ❌ flawed logic

2. declare fn for incrementation/decrementation logic

✅ 3. implement state var counter as value of value of coloured number

# 1st attempt

onClick={setCounter(counter + 1)}

xx> doesn't work. I assume that this is because we can't have logic within params if setCounter call

# 2nd attempt

the set counter shall a fn which executes the input value based operation

like

1 fn to increment counter by one
2 onClick to call setCounter of state var which then calls incrementCounter

fn incrementCounter () {
counter++
return
}

<button …
  onClick=(setCounter(incrementCounter))

xx> macht so keinen Sinn, 
1st attempt ging logisch doch in die richtige Richtung, weil man im setCounter nochmal logic executen msus
2nd attempt ging logisch doch in die richtige Richtung, weil man einen externen Block Code logic braucht = fn

3rd attempt:

habe versucht die state var und die incr decr fn in die app zu heben
dabei ist mir das rendering der vaiable verloren gegangen

mit Blick auf Benjamins Lösung sehe ich, dass mein ursprünglicher attempt, 
alles in Counter abzubilden, doch richtig war
nochmal reset und von vorne


*/
