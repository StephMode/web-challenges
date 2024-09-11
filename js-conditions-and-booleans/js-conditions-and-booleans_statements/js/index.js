console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
// const receivedPassword = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brundhile1984.");
} else {
  console.log("Access denied!");
}

/// tried the modern, simpflified syntax, failed miserably 😭
// SUPER_SECRET_PASSWORD === receivedPassword
//   ? "Welcome! You are logged in as Brundhile1984."
//   : "Access dienied!";

// Part 2: Even / Odd
let number = 6;
// Need to change from const to let here so that I can conduct math. operations

// this operation helps me to distinguish between even/odd nums
// number = number % 2;
// console.log(number);

// if (number % 2 = 0;) {
//     console.log("even number");
// } else {
//     console.log("odd number");
// }

// keine Ahnung, weiß ich gerade nicht

// Part 3: Hotdogs
const numberOfHotdogs = 12000000;

// hat nicht funktioniert, weil man && logische operatorn braucht

// if (numberOfHotdogs < 5) {
//     console.log("2 euro per hotdog");
// } if else (numberOfHotdogs >= 5) {
//     console.log("1.50 euro per hotdog");
// } if else (numberOfHotdogs >= 100) {
//     console.log("1 euro per hotdog");
// } if else (numberOfHotdogs >= 1000000) {
//     console.log("0.1 euro per hotdog");
// };

// hat nicht funktioniert, weil ein else statement nichts in Klammern haben darf

// if (numberOfHotdogs < 5) {
//     console.log("2 euro per hotdog");
//   } else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
//     console.log("1.5 euro per hotdog");
//   } else if (numberOfHotdogs >= 100) {
//     console.log("1 euro per hotdog");
//   } else (numberOfHotdogs <= 1000000) {
//     console.log("0.1 per hotd");
//   }

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.5 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.1 per hotd");
}

// Part 4: Daytime
const currentHour = 22;

// const statement = "";

const statement = currentHour < 17 ? "Still need to learn" : "Partytime";

console.log(statement);

// Part 5: Greeting
const userName = "Roland";

const greeting = "Hello " + (userName === "Roland" ? "Coach" : userName) + " !";

// erster Fehler:
// const greeting = "Hello " + userName = "Roland" ? "Coach" : userName + "!";
// habe hier "===" statt "=" als operator gebraucht

// zweiter Fehler
// const greeting = "Hello " + userName === "Roland" ? "Coach" : userName + " !";
// hier muss man den tenary operator in KLammern setzen, damit das console.log zweifelsfrei ausgeführt werden kann

console.log(greeting);
