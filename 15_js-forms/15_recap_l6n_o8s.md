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

# Session Topic

## Learning Objectives

### Understanding the default behavior of form submit and knowing how to prevent it with `.preventDefault()`

_My summary:_
❌ ~~Website creates a POST request upon submission and makes a network request~~

_revised_:

- The form sends a GET request with names and their values as prop inside an URL
- The page is reloaded/refreshed automatically and all data is lost for us
- Using .preventDefault() inside the eventListener function body stops the automatic page reload:

```js
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

_Keywords_:

- Form submission
- Default behavior
- .preventDefault()
- GET request

### knowing how to listen to submit events: the `event` object and its `target` property

_My summary:_
event needs to be set as param for the callback fn to take it as an argument
event.target then redirects the event to something else than the default behaviour

-> merken!

_revised_:

(event) needs to be set as param for the callback fn to take it as an argument.
The `event` object helps to interact with the form itself and the `event.target`reference helps to interact with specific form elements.

In order to prevent the forms default behaviour, you need to

- receive the event object as an argument of the event listener arrow fn
- call `event.preventDefault()` method

Remember this code snippet:

```js
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

The `event` object is created whenever an event is triggered. You can accept it as the first
parameter in the callback function and thus access it inside the function body (e.g. via
`event.preventDefault()`). So, the event param is important for methods like preventDefault(), which rely on the `event` object.

For now, the most important method of the `event` object is `.preventDefault()`.

_Keywords_:

- event object
- event.target
- Submit event listener

### reading input values:

- `event.target.elements`

- `FormData`
- the role of `name` attributes for form fields

_My summary:_
if we need to access the input value of a certain form field, it is best practise to do so by adressing it by the value of its `name=" "` attribute.

_revised_:

Forms are created to request information from the user. Each fragment of information (each form field) requires a unique name, which can be set with the `name` attribute in HTML. This attribute binds the entered data to the named field, when submitting the form.

While `event.target` represents the entire form, `event.target.elements` is a collection of all form elements (form fields, field sets and buttons). You can access specific form fields via adding the value of `name=""` of the input field to `event.target.elements`

Note that

- `event.target.elements` is stored in the variable `formElements` for better readability,
- `firstName` is the string value of the corresponding `name` attribute, as in
  `<input name="firstName"/>`, and
- `firstName.value` returns the user input for the field with `name="firstName"`.

_Keywords_:

- event.target.elements
- FormData
- name attribute
- Input value retrieval

### understanding the input event

_My summary:_
the event when a user puts in the respective input to the input field (html element) according to the type of the input field

_revised_:

A function

_Keywords_:

- input event
- Real-time form updates
- event.target.value

### Using input values

You can access all input values of the form by using `FormData()`. This constructor uses
`event.target` and can be transformed into a usable object afterwards:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

### knowing how to focus an input field programmatically

_My summary:_
??

_revised_:

The event when a user inputs data into the input field (HTML element) according to the type of the input field.

_Keywords_:

### knowing how to reset a form

_My summary:_

_revised_:

A function

_Keywords_:
