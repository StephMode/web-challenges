import React from "react";
import "./styles.css";

export default function App() {
  return <Heading></Heading>;
}

function Heading() {
  return <h1>Hello world!</h1>;
}

/* So würde das ohne component aussehen:

export default function App() {
  return <h1>Hello world!</h1>;
}

*/
