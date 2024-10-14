// Find the maximum
// const value1 = 2;
// const value2 = 1;

function maxOfTwoNumbers(num1, num2) {
  // TODO:
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

/* Challenge 1 Comments
Problem & Requirements:

I need to build a fn that determines the maximun value of two integer values.
There is no variable given. Hence, I need to initialize variables first to have values that can be compared.


The function needs to check IF num1 > num2, max === num1, ELSE max === num2

Plan & Steps:

1. Initialize const with integer value

2. write if/else function


Mock Code and Improvement:

function maxOfTwoNumbers(num1, num2) {
  // TODO:
  if (value1 > value2) {
    return value1 > value2;
  } else {
    return value2 > value1;
  }
}

this doesn't work, becuase 
- it doesn't return a result in integer value
- it directly uses the consts instead of params/arguments
Try 
- using the params
- just returning num1, num2

if (num1 > num2) return num1, else num2
✅

Refinement: do I need to have const in the first place? Beacuse the test algorithms in jest should be just checking for fn logic.
Try
- taking out const and test again
✅ worked. What's required here is just logic, no variables needed to be initialized.

⭐️ Pay closer attention to the task. 



*/

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  if (words.length === 0) return null; // Return immediately if the array is empty
  let currentLongestWord = ""; // Initialize an empty string for the longest word
  words.forEach((word) => {
    // Loop through each word in the array
    if (word.length > currentLongestWord.length) {
      currentLongestWord = word; // Update the currentLongestWord if a longer word is found
    }
  });
  return currentLongestWord; // Return the longest word found
}

// MY FINAL ATTEMPTS
// function findLongestWord(words) {
//   let longestWord = "";
//   words.forEach((word) => {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });
//   return longestWord;
// }

// console.log(findLongestWord(words));

// findLongestWord(words);

/* Challenge 2 Comments

Problem & Requirements:

fn shall go through all string values of the array and return the longest string.

We need to loop through the whole array and have the longest word as the return value.

Plan & Steps:

1. initialize const for longest word

2. logic to iterate over array and check which string is the longest

2.1. declare loop = const, needs to be loop to iterate over array

xx 2.1.1. decide which loop to choose
for … of applicable to arrays. Used to execute logic for every element of the iterable. Should be applicable here.

2.2. method (built in function) to check for longest string in the array

method for filtering an element from an array
we don't need a new array, just going through words and return a value
forEach should be applicable
==> hence we don't need a loop, becuase forEach already does that

method to compare lenght of string
max.length could be used here


3. include return statemennt containing value of const


Mock Code:

for each element in array, determine the length
return the element with max length form the array words

const longestWord

1st attempt

function findLongestWord() {
  const longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord) {
      longestWord = word;
    }
  });
  return longestWord;
}

Why it doesn't work:
- longestWord is a an immutable variable => initialize as let
- the comparison word > longestWord doesn't compare for lenght on both operators => apply length method to longestWord

2nd attempt:

function findLongestWord() {
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

logic should be sound, but test is still not passed

Why:
- I am not calling the function upon any array yet
- shouldn't have deleted the param words

fn call with arguemt of our array


3rd attempt:

function findLongestWord(words) {
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

findLongestWord(words);

Why:
> Program structure (arr + fn + call) should be correct now.

- But with this statement structure, my fn only returns ""
- The arguments are not connected in a way that the second statement (if-fn) mutates the let var

Maybe we need to reassing the value of longestWord with the value being the second statement



*/

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  const sum = numbers.reduce((acc, currValue) => acc + currValue, 0);
  return sum;
}

/* Challenge 3 Comments

We need to reduce the array to a single value, being the sum of all the elements which are integer values in this case.

We should use a function to iterate over integer values of the array and ending up with the sum.

A loop can be used or a an array method that also has loop logic included.

Mock Code

for loop
for every element in array, but only as long as the array, add element + element

array.reduce(accum, currentValue) => accumulator + curVa, 0) because we don't want a return value higher than the sum of numbers


function sumNumbers(numbers) {
  numbers.reduce((acc, currValue) => acc + currValue, 0);
}

didn't work, maybe declaring a sum const and returning it might help
==> worked

Final attempt:

function sumNumbers(numbers) {
  const sum = numbers.reduce((acc, currValue) => acc + currValue, 0);
  return sum;
}

✅ This worked because with the const I included encapsulation of the result of redue() computation of array values-

*/

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  if (words.length === 0) return null; // this is crucial, since it handles the edge case of dividing by 0
  const sumOfStrings = () => {
    let l = 0;
    words.forEach((word) => (l += word.length));
    return l;
  };
  const lenghtOfArray = words.length;
  const result = sumOfStrings() / lenghtOfArray;
  return result;
}

/* Notes on chall 4

Problems and Outline:

Need to iterate over the array. The array itself doesn't need to be mutated.
We need to do computiation with the array values. We need to find the average word lenght of all string elements of the array.

Basically: sum(strings in array) / number of elements in array = average word lenght

Plan: 

We could encapsulate both operands in const, also result of caclulation in const and return const result
somewhat verbose but legible

1. const sum of strings in array = words.forEach((word) => lenght of word)
2. const elementsinarray = array.lenght
3. const avg word lgth = const 1 / const 2
4. return avg word lgth





*/

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  // TODO:
}

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  // TODO:
}

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  // TODO:
}

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // TODO:
}

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
