_26.09.24_

Purpose of this doc is to go through the learning objectives by briefly summarizing what I should have learned and kept from the session.

Process:

1. Copy this .md into the session folder
2. Copy l6n o8s from session notes into this doc
3. Turn single l6n o8s into ###
4. Add template into chapters
5. Start summarizing
6. Go through session notes again
7. Refine and revise summaries
8. Add Keywords

# Session Topic

## Learning Objectives

Template for l6n o8s chapters

### learning different ways of writing strings

_My summary:_

JavaScript provides three ways to create strings:

1. `'string'`: single quotes
2. `"string"`: double quotes
3. `` `string` ``: back ticks or **template literals**.

The choice between single or double quotes is usually stylistic, with tools like Prettier enforcing consistency. Template literals allow string interpolation for embedding expressions within a string using ${} and support multi-line strings.

Strings can be chained together by using the `+` operator (yes, the same as the maths operator).
This is called **string concatenation**:

```js
const name = "Alex";
const stringConcatenation = "Hello " + name + ", good to see you!";
```

The third method to write strings has the useful property that you can insert variables into the
string by wrapping placeholders with a dollar sign and curly brackets `${}` . This is also called
**string interpolation**.

This way you don't have to concat multiple strings if you want to use a variable in your string.

_revised_:

_Keywords_:

- String literals
- String interpolation
- Template literals
- String concatenation
- Multi-line strings in JavaScript

### using string properties and methods

_My summary:_

Strings in JavaScript have some build-in **properties** and functionalities called **methods**. You
can call them with the dot notation followed by the name of the property / method.

Methods are functions, thus they need to be invoked by placing `()` brackets after the name of
the method.

| Property / Method                   | Effect                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `.length`                           | returns the number of characters in a string.                            |
| `.toUpperCase()`                    | returns a all uppercase version of the string.                           |
| `.toLowerCase()`                    | returns a all lowercase version of the string.                           |
| `.trim()`                           | returns a string with all whitespace removed from the beginning and end. |
| `.replaceAll(oldString, newString)` | replaces all occurrences of `oldString` with the `newString`.            |
| `.startsWith(subString)`            | returns `true` if the string starts with subString.                      |
| `.endsWith(subString)`              | returns `true` if the string ends with subString.                        |
| `.includes(subString)`              | returns `true` if the string contains the subString.                     |

_revised_:

lipsum

_Keywords_:

- String properties in JavaScript
- JavaScript string methods
- String manipulation
- MDN string methods reference

### working with input elements

_My summary:_
Every input field in HTML holds a **value** in form of a string. You can access the value by using
`.value` on the input Element:

```html
<form>
  <input data-js="textInput" type="text" value="test 123" />
  <input data-js="numberInput" type="number" value="42" />
</form>
```

```js
const textInput = document.querySelector('[data-js="textInput"]');
const numberInput = document.querySelector('[data-js="numberInput"]');

textInput.value; // evaluates to 'test 123'
numberInput.value; // evaluates to '42' (still a string!)
```

You can also change the value of the input by assigning a new value to this input property:

```js
textInput.value = "changed value!";
```

To manipulate the input's content dynamically, you can add event listeners, like converting the input to uppercase on every change:

```js
textInput.addEventListener("input", () => {
  textInput.value = textInput.value.toUpperCase();
});
```

_revised_:

lipsum

_Keywords_:

- HTML input fields
- JavaScript .value property
- Event listeners on input elements
- Form manipulation in JavaScript
- Input validation and transformation
