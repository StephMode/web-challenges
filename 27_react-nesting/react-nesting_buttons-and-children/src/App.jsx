import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>toggle</Button>
      <Button>rotation</Button>
      <Button>color change</Button>
      <Button>border radius</Button>
      {/* das hier ist quasi wie das argum beim call der comp */}
      {/* <Button>{"border radius"}</Button> // hatte ich urspr. so geschrieben, ist dann also ein JS Element, brauche ich hier nicht */}
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      Button for {children}
    </button>
  );
}

// function ButtonText({ tag }) {
//   return <div>Button for {tag}</div>;
// } // habe ich gar nicht gebraucht
