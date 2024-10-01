console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  // Part 1: for loop to render 5 stars into the div
  // das sollte ich nochmal in ne fn encapsulaten
  // 💡 Learning: bei counter = 5 ist der loop ad infinitum durchgelaufen

  // Part 2: expand the loop so that it creates n "filled star(s)", else create n "empty star(s)"
  // Number of "filled star(s)" is given by the param (filledStars)
  // Schritt 1: remove encapsulation renderEmptyStar() {...}
  // Schritt 2: if/else in for-loop: if "filledStars >= 1, then"

  function renderEmptyStar() {
    let emptyStarElement;
    for (let counter = 1; counter < 6; counter++) {
      // console.log("loop runs");
      emptyStarElement = document.createElement("img");
      emptyStarElement.setAttribute("src", "assets/star-empty.svg");
      starContainer.append(emptyStarElement);
    }
  }

  renderEmptyStar();
  //--^-- your code here --^--
}

renderStars();
