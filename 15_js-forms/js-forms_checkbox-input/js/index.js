console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// ich brauche einen anderen event listener, um die error message per default zu verbergen

tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  // code for the interactive part of the error message

  // const formElements = event.target.elements;
  // the first const is not necessarily needed, the second const is sufficient
  const tosCheckboxStatus = event.target.tos.checked;
  // remember, .value will return the value of the element, .checked will return a boolean

  console.log(tosCheckboxStatus);

  if (tosCheckboxStatus === false) {
    showTosError();
    return;
  }

  hideTosError();
  console.log("test passed");

  event.target.reset();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
