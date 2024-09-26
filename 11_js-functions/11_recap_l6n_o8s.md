_26.09.24_

Prupose of this doc is to go through the learning objectives by briefly summarizing what I should have learned and kept from the session.

# JS Functions

## Learning Objectives

### Understanding the purpose of functions.

_My summary:_
A function contains a block of code which can be accessed in the script just by calling the function by its name instead of repeating the same block of code whenever it's needed. The block of code can contain one or several seperate statements which can be variables, functions or methods.

_revised_:

A function is a reusable block of code that performs specific task. It helps avoid repition by allowing the same code to be used in multiple places via a function call.

_Keywords_:

- DRY Principle
- code reusability
- modularity

### Writing custom functions with function declarations.

_My summary:_
A custom function is written like this:

1. Declaration of function via "function"-keyword
2. Name of the function using camelCase
3. () one or several parameters of the function written in the parentheses
4. one or several satements within {} which make up for the functionality of the function !! not functionality, BUT LOGIC

_revised:_

To declare a custom function:

1. Use the function keyword
2. Give it a meaningful name in camelCase
3. include parameters if needed inside ()
4. Write the functions logic inside {}

```JS
function myFunction () {
    const hello = "Hello WOrld"
    return;
}
```

_Keywords:_

- function declaration, function body, camelCase

### Naming functions appropriately.

_My summary:_
Function names should be in camelCase, brief but descriptive, and typically start with a verb to indicate the action the function performs.

not: fhUsNa
beter: fetchUserName

_Keywords_:

- naming conventions, descriptive names, action verbs

### Using default values // default parameters 📥

_My summary:_
??

_Addition & Correction_

_default parameters_ is the term I found in mdn webdocs.

_default parameters_:

- Sometimes a function is called without passing an argument.
- In this case, the corresponding parameter becomes `undefined`. This is not an error but could be unintentional.
- To handle this, we can use `default values` in the function declaration.
- These values are used if the argument is omitted.

```js
function printLetter(name = "Child") {
  console.log("Hi " + name + ", hope you are fine. Your Mum");
}

// the default param here is: "= child" in (name = "child")

// Function calls
printLetter("Alice"); // Output: "Hi, Alice!"
printLetter(); // Output: "Hi, Child!"
```

### Calling functions

_My summary:_
After declaring a function, you can _execute_ it by writing it's name followed by parentheses ().

```JS
myFunction();
```

_Keywords:_

- invoking functions
- function call syntax

### Using function parameters and passing arguments to function calls.

_My summary:_
With parameters, a function can offer "variables" for the function call. The function call can in turn use those "variable"-slots to fill it with arguments nedded in the call.

_revised:_
Parameters are placeholders in the functionn defintion. Arguments are values passed when calling the function. Parameters enable functions to work with diffrent inputs.

_Keywords:_

- parametes VS arguments
- dynamic inputs

### Understanding variable scope.

_My summary:_
Depending on where a variable is declared, it can have global scope or local scope.
Variables with global scope are declared in the script file and can be used anywhere, whether it be inside a function as a statement or in the script file.
Variables with local scope are declared in a statement of a function and can only be used there. It's not possible to call upon a function with local scope from within another function for example.

revised:

A variable can have global scope (accessible everywhere) or local scope (accessible only within the function it's declared in). Local variables override global ones within the same scope.

_Keywords:_

- global scope
- local scope
- varibale shadowing

### Returning values from functions.

_My summary:_
This can be done by using a return-statement.
The return statement passes on the value from a function in a function call.
Also, all statements after the return statement are non-executable.

revised:

A function can return a value using the return statement. Once return is called, the function stops executing. Any code after the return statement is ignored.

_Keywords:_

- return statement
- function result
- early return
