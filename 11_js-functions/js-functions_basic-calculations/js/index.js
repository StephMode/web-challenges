console.clear();

/* ⭐️ Learnings aus dieser challenge

return values from functions
- return Math.abs(a + b) eignet sich nur bei operations, die eine positive Zahl oder 0 ergeben können
- return reicht für einfache Kalkulationen, es "returned" einen mathematischen Wert, also ein Statement (Ergebenis) aus zwei expressions (operanden der function)

Warum console.log() nicht funktioniert hat:
-> console.log() returnt keinen Wert sondern printed einen output in die console

Debugging
- console.assert() ist ein vielseitiges debugging tool, dem man viele Kriterien zur Prüfung geben kann, der hier aufgeführte Use Case ist nur ein Beispiel
- console.log() als Debbugging-Tool ist hilfreich, um nachzuvollziehen, ob etwas wie beabsichtigt getriggert wurde, weil upon trigger der log in die console geprinted wird

*/

/*
Complete the functions add, subtract, multiply, divide and remainder.
They should return the result of the respective calculation:
- add: the sum of the two numbers
- subtract: the difference between the two numbers
- multiply: the product of the numbers
- divide: the division of the two numbers
- remainder: the modulo or remainder of of "a modulo b"
*/

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

/*
These console.asserts check if your functions are correct. If nothing appears in your console it works properly!
*/

console.assert(
  add(1, 1) === 2,
  `add(1,1) should be 2, instead got ${add(1, 1)}`
);
console.assert(
  add(12, 192) === 204,
  `add(12,192) should be 204, instead got ${add(12, 192)}`
);
console.assert(
  add(-1020, 5843) === 4823,
  `add(-1020, 5843) should be 4823, instead got ${add(-1020, 5843)}`
);

console.assert(
  subtract(1, 1) === 0,
  `subtract(1,1) should be 0, instead got ${subtract(1, 1)}`
);
console.assert(
  subtract(12, 192) === -180,
  `subtract(12,192) should be -180, instead got ${subtract(12, 192)}`
);
console.assert(
  subtract(-1020, 5843) === -6863,
  `subtract(-1020, 5843) should be  -6863, instead got ${subtract(-1020, 5843)}`
);

console.assert(
  multiply(1, 1) === 1,
  `multiply(1,1) should be 1, instead got ${multiply(1, 1)}`
);
console.assert(
  multiply(12, 192) === 2304,
  `multiply(12,192) should be 2304, instead got ${multiply(12, 192)}`
);
console.assert(
  multiply(-1020, 5843) === -5959860,
  `multiply(-1020, 5843) should be  -5959860, instead got ${multiply(
    -1020,
    5843
  )}`
);

console.assert(
  divide(1, 1) === 1,
  `divide(1,1) should be 1, instead got ${divide(1, 1)}`
);
console.assert(
  divide(12, 192) === 0.0625,
  `divide(12,192) should be 0.0625, instead got ${divide(12, 192)}`
);
console.assert(
  divide(-1020, 5843) === -0.17456785897655314,
  `divide(-1020, 5843) should be  -0.17456785897655314, instead got ${divide(
    -1020,
    5843
  )}`
);

console.assert(
  remainder(1, 2) === 1,
  `remainder(1,2) should be 1, instead got ${remainder(1, 2)}`
);
console.assert(
  remainder(67, 24) === 19,
  `remainder(12,192) should be 19, instead got ${remainder(67, 24)}`
);
console.assert(
  remainder(231, 7) === 0,
  `remainder(-1020, 5843) should be 0, instead got ${remainder(231, 7)}`
);
