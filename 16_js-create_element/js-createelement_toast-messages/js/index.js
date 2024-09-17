console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  // Approach: create const for toastMessage - adds tM, set up method for filling tM with content
  /*

  const toastMessage = toastContainer.append(li);
  console.log("tM created");

  Warum hat das nicht funktioniert: 
  Pizza backen Analogie: 
  - toastContainer.append(li) ist Pizza ausliefern
  - document.Create… ist Pizzateig zubereiten
  - toastMessage.classList… ist Pizza belegen
  - toastMessage.textContent… ist Pizza zubereiten
  Ich wollte also zuerst ausliefern und dann alles weitere
  geht grundsätzlich, aber ist nicht best practise, weil auf leistungsschwächeren machines manchmal unschön gerendert wird
  ist auch unnöttig performance hungrig


  */
  // Revised Approach:
  // 1. const for toastMessage document.createElement("li")
  // 2. add content to tM
  // 3. append tM to tC

  const toastMessage = document.createElement("li");
  toastMessage.classList.add("toast-container__message");
  toastMessage.textContent = "I'm also a toast message";
  toastContainer.append(toastMessage);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  // getElementbyID/oder was auch immer,

  // bei Nils gesehene Lösung, hat auch nicht funktioniert:
  // if (event.target.tagName === "LI") {
  //   event.target.remove();
  // }
  // toastContainer.setAttribute("hidden", "");
  // -> funktioniert nicht, weil ich hier kein LI direkt ansteuere
  /* das hier als Alternative, aber noch way over my head

  clearButton.addEventListener("click", () => {
  // Optionally iterate over all children and remove them one by one
  while (toastContainer.firstChild) {
    toastContainer.removeChild(toastContainer.firstChild);
  }
  console.log("All toast messages cleared.");
});


  */

  // diese Lösung löscht die li, aber verunmöglicht die Erstellung neuer tM
  // toastContainer.remove("li");

  // toastContainer.setAttribute("hidden", ""); funktioniert nicht, weil man einfach nur die Elemente versteckt

  toastContainer.textContent = "";
  console.log("All tM cleared");
  // zT meine Lösung, damit geht die Anforderung der user story auf
});
