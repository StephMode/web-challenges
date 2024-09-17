console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

/* ursprüngliche function
function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
*/

// eine arrow function kann keine zwei const haben, deshalb verwandele ich die zwei const in eine: currentHourNow

// const currentHourNow = new Date().now.getHours() => {
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }
//   console.log("fn executed")
// }

// feedback:
// - typo/syntax fehler bei der getHour method
// - die fn sollte mit const beginnen
// - misleading name of fn

// corrected

const getCurrentHour = () => {
  const currentHour = newDate().getHours();
  if (currentHour === 0) return "12am";
  if (currentHour === 12) return "12pm";
  return currentHour <= 11 ? `$|currentHour}am` : `$|currentHour - 12}pm`;
};

// diffrent corrected solution:

/*

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return '12am';
  } else if (currentHour === 12) {
    return '12pm';
  } else if (currentHour <= 11) {
    return currentHour + 'am';
  } else {
    return currentHour - 12 + 'pm';
  }
};

*/

/* ursprüngliche function
function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
*/

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

// Feedback: korrekt, durch weglassen von return habe ich hier ein implicit return statement. Das macht die fn noch konziser

/* ursprüngliche function
function cleanInput(string) {
  return string.toLowerCase().trim();
}
*/

const cleanInput = (string) => string.toLowerCase().trim();

// Feedback: korrekt, durch weglassen von return habe ich hier ein implicit return statement. Das macht die fn noch konziser

/*
Rewrite the following arrow functions as classic functions.
*/

// Feedback: hier stimmt alles, nur die Umbenennung der fn names ist nicht nötig und teilweise misleading

/* ursprüngliche arrow function
const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }

  return true;
}

/* ursprüngliche arrow function
const add3 = (a, b, c) => a + b + c;
*/

function add3(a, b, c) {
  return a + b + c;
}

/* ursprüngliche arrow function
const repeat10 = (string) => string.repeat(10);
*/

function repeat10(string) {
  return string.repeat(10);
}
