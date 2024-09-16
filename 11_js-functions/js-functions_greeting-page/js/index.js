console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

  display = document.querySelector("display");
  display = textContent = "Good Morning";

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

/* Approach

fn getGreeting
- textContent wird gebraucht
- if else statement
dispay = doc.querSele
dipl.textContent= "Hello World";

Step by step aufbauen mit hilfe von console.log:
- mit new Date().getHours() vertraut machen - verstanden

Vllt gar nicht erforderlich
- damit in if-else vertraut machen 
- mti der DOM manipu arbeiten

Was brauche ich hier eigentlich:
kein dom manipulation in der function, das wird weiter unten in 67  ausgeführt
die dom manipulation in 67 f soll ihren Text aus getGreeting ziehen
deshalb if else mit return die Lösung


fn getDayColor
- welche DOM manipulation??
- if else statement

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentTime = new Date().getHours();
  // it's better to call the method "new Date … Hours();" once and make the value available as stored in a const
  if (currentTime >= 6 && currentTime <= 12) {
    /* wir müssen bei beiden logical operators die const abrufen */ return "Good Morning";
  } else if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  } else if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  const currentWeekday = new Date().getDay();
  if (currentWeekday === 1) {
    return "darkgray";
  } else if (currentWeekday >= 2 && currentWeekday <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

/* Versuche

  // if (new Date().getHours() = 12) {
  //   textContent = "Good Morning";
  // } else {
  //   textContent = "Good Night";
  // }


if (condition) {
    if (new Date().getHours() < 6) {
      return "Good Night";
    } else if (new Date().getHours() < 13) {
      return "Good Morning";
    } else if (new Date().getHours() < 19 {
      return "Good Afternoon"; 
    } else if (new Date().getHours() < 23) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  } else {
    
  }

*/
