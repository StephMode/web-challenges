console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  //   pevent default method of the event object
  event.preventDefault();
  // logs all form data in an object and submits it to the console
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  // clears the form
  event.target.reset();
  console.log("Form reset");
  // refocuses on first name by utlizing the name-property of the targeted html element within the form
  event.target.elements.firstName.focus();
  console.log("Refocus on firstName field");
});
