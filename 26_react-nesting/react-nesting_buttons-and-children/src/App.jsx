import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>{"toggle"}</Button>
      <Button>{"rotation"}</Button>
      <Button>{"color change"}</Button>
      <Button>{"border radius"}</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

function ButtonText({ tag }) {
  return <div>Button for {tag}</div>;
}
