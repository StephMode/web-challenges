_27.09.24_

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

# Objects and Arrays

## Common array methods

| Attribute / Method       | Effect                                           |
| ------------------------ | ------------------------------------------------ |
| `array.length`           | returns the number of elements in the array      |
| `array.push(element)`    | adds `element` to the end of the array           |
| `array.pop()`            | removes the last element of an array             |
| `array.unshift(element)` | adds `element` as the first element of the array |
| `array.shift()`          | removes the first element of the array           |

## Creating, accessing, and manipulating arrays

_My summary:_

Arrays are a structured data type. They are declared by writing [] brackets as value of a variable and putting any kind of structured or unstructered data inside those brackets.

Use the [] bracket notation for accessing values of arrays. Also keep in mind that JS is a 0-indexed language, so the first element of an array is indexed with 0.

For accessing values in nested arrays, just chain bracket notated indices behind one another.

For manipulation of a value inside an array, just put the index and assign any value to it (structured or unstructured data types possible).

```JS
const shoppingList = ["apple", "tomato"];

shoppingList[0]; // "apple"
shoppingList[1]; // "tomato"

const nestedArray = ["a", 1, ["a", "new", "sentence"], false];
nestedArray[2][1]; // "new"
```

_revised_: 📥

Arrays are a structured data type declared with []. They store values indexed from 0, allowing for easy access and manipulation of elements. You can overwrite values by specifying their index.

_Keywords_:

- Array methods
- Array indexing
- Nested arrays
- 0-indexed
- Mutability

## Creating, accessing, and manipulating objects

_My summary:_
Objects are a structured data type. They are declared by writing {} curly braces as value of a variable. An object consits of key value pairs. The key categorizes its value. The key should preferably be a string without special characters (underscore and "$" are no special characters.)

Use the . dot notation, like: `.nameOfkey`, for accessing keyed values of an object. You can also use [] bracket notation, like `["nameOfKey"]`. This is necessary in case the key contains special characters like " ", e.g. `["other people"]` as a key to be accesses.

For accessing values in nested objects, just chain bracket notated indices (if arrays are nested in the object or if the key contains special characters) or .notation (for regular keys) behind one another.

For manipulation of a value inside an objects, just access the key of the key value pair (or an index of a nested array, if any) and assign a new value (structured or unstructured data types possible).

```JS
const person = {
  name: "Max Paddington",
  age: 21,
  isStudent: false,
  address: {
    street: "Berliner Str.",
    houseNumber: 42,
    city: "Leipzig",
    zipCode: "12345",
  },
};t: false,
};

person.name; //"Max Paddington"
person["age"]; // 21

person.address.street; // "Berliner Str."
person.address["city"]; // "Leipzig"

// add and delete

person.score = 15;
delete person.score;

```

_revised_: 📥

Objects are declared with {} and consist of key-value pairs. Access values using . or [] notation. Modify properties directly and manage nested structures through chained access.

_Keywords_:

- Key-value pairs
- Dot notation
- Bracket notation
- Nested objects
- Object mutability

## Knowing how to find properties and methods of objects by logging

_My summary:_
??

_revised_:
Use console.log(object) to explore properties and methods of objects, allowing you to understand their structure and capabilities.

After manipulation of a value within an array/object, consolge.log the notation to access the value within ().

_Keywords_:

- a
- b
- c
