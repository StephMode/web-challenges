import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;
  const [favorite, isFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        isFavorite(!favorite); // that worked ⭐️
      }}
      aria-label="favorite"
    >
      {favorite ? <StarFilled /> : <Star />}
    </button>
  );
}

/*

Step1: declare state var for favorite status instead of const

Step2: change ternary operator for content of button accordingly



//Step3: pass the event handler to the onClick in the button
❌ no event handler needed just change the value to the opposite using !favorite logical operator

onClick={() => {
        console.log("favorite button clicked");
        isFavorite(true);
      }}
xx> This toggles "true", but only once

How to make a boolean toggleable?

maybe a separate handle fn

handleToggle () { change value to it's opposite }

pass the handleToggle fn in the onClick as an argument of isFav state fn

tried diffrent approaches, all lead to error message:
"favorite is constant no-const-assign"

function handleToggle() {
    if ((favorite = true)) {
      isFavorite(false);
    } else {
      isFavorite(true);
    }
  }

  or these in onClick

  // isFavorite(handleToggle);
        // isFavorite(true);



*/
