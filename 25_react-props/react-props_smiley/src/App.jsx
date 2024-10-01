import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </main>
  );
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "😊" : "😔"}</h1>;
}
