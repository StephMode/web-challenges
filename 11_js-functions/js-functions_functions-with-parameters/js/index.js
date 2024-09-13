console.clear();

logSeparatorLine();
logSeperator(1);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:
logText();
// A: The text isn't being logged in the console, because the function is not called => add ()

function logText() {
  console.log("This text does not appear. Why?");
}

logSeparatorLine();
logSeperator(2);
/*
2: 
Look at the functions below. 
They are almost identical. 
Can you find a way to generalize them into a new function with an input parameter? 
Replace the function calls below with your new function.
*/

/* 
=> need a function w/ console.log() 
with premade "Welcome … again!"
then function calls with name
and parameter
*/

/*
function greetBob() {
  console.log("Welcome Bob, good to see you again!");
}

function greetAlice() {
  console.log("Welcome Alice, good to see you again!");
}

function greetMary() {
  console.log("Welcome Mary, good to see you again!");
}

greetAlice();
greetBob();
greetMary();
*/

// --v-- write your code here --v--

function greet(name) {
  console.log("Welcome " + name + ", good to see you again!");
}

greet("Alice");
greet("Bob");
greet("Mary");

// --^-- write your code here --^--

logSeparatorLine();
logSeperator(3);
/*
3: 

We log a little separation text for each subtask. 
This is repetitive code, so lets write a function 'logSeparator' 

which takes the number of the exercise as a parameter 


and logs the respective separator. 


Then use this function to replace the existing separator logs in this javascript file.

Note: Separation text means the text that is logged into the console before each exercise. For example: "-------------" and "Exercise 1:" are the separation texts for the first exercise.

*/

/*
=> 

this approach doesn't make sense, it's not what they asked
//  just declare a function with a const in it "-----"
// function calls in lines 2, 17 and 64

was wird gefragt:
- es soll eine function geschrieben werden, die den seperator TEXT einpastet


*/

// --v-- write your code here --v--

function logSeperator(number) {
  console.log("Exercise " + number + ":");
}

function logSeparatorLine() {
  console.log("------------------");
}

// --^-- write your code here --^--
