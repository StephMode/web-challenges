import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={100} valueB={2}></Sum>;
  // return <h1>Replace me with your component!</h1>;
}

// result(num1, num2) => num1 + num2; // didn't work syntactically

// function result(operand1, operand2) {
//   return operand1 + operand2;
// } // worked, but I want to be more concise and less verbose

function Sum({ valueA, valueB }) {
  return (
    <div>
      <span>{Number(valueA)}</span>
      <span> + </span>
      <span>{Number(valueB)}</span>
      <span> = </span>
      <span>{valueA + valueB}</span>
    </div>
  );
}

/* ✅ Solution 2: with more consice syntax in 

attempt with => function in the last span:
- doesn't work because fn decalration inside JSX isn't valid syntax
- JSX doesn't need fn in the first place, because it can make simple calculations itself


function Sum({ valueA, valueB }) {
  return (
    <div>
      <span>{Number(valueA)}</span>
      <span> + </span>
      <span>{Number(valueB)}</span>
      <span> = </span>
      <span>{(valueA, valueB) => valueA + valueB)}</span>
    </div>
  );
}
*/

/* ✅ Solution 1: with verbose result fn

function result(operand1, operand2) {
  return operand1 + operand2;
} // worked, but I want to be more concise and less verbose

function Sum({ valueA, valueB }) {
  return (
    <div>
      <span>{Number(valueA)}</span>
      <span> + </span>
      <span>{Number(valueB)}</span>
      <span> = </span>
      <span>{result(valueA, valueB)}</span>
    </div>
  );
}
*/
