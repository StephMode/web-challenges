import { add, subtract, multiply, divide } from "./index.js";

// Tests for add
test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
// test("returns a negative value if the greater argument is negative", () => {
//   const result = add(a < 0, b);
//   expect(result).toBeLessThan(0);
// });
/*
💡 Learnings:
- das ist zu kompliziert gedacht
- ein Abgleich der argum. mit bestimmter Logik ist hier nicht gefragt
- Idee war hier, die fn mit beliebig. argum. zu rufen, die den reqs entsprechen
- das dann abfragen ob result neg

Also:
*/
test("returns a negative value if the greater argument is negative", () => {
  expect(add(-3, 2)).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// Tests for subtract

test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  expect(subtract(2, 3)).toBeLessThan(0);
});

// Tests for multiply

test("multiply", () => {
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(-1, 1)).toBeLessThan(0);
  expect(multiply(1, -1)).toBeLessThan(0);
  expect(multiply(-1, -1)).toBeGreaterThan(0);
});

// tests for divide

test("divide", () => {
  expect(divide(9, 3)).toBe(3);
  expect(divide(1, 0)).toBe("You should not do this!");
});

/*
Wenn man mehrere tests gebündelt schreiben will

test("case", () => {
    expect(fn(arg1, ))    
})

*/

/*

Syntax:

test("what the test does/test case in plain english", () => {
    const result = fn() call of fn to be tested with required argum.
    expect(result).toBe(result for test case) => expect fn requires a matcher
    })

*/
