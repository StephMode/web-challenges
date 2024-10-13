import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  function handleNextButton() {
    setOffset((prevOffset) => prevOffset + 20);
  }

  function handlePreviousButton() {
    setOffset((prevOffset) => (prevOffset >= 20 ? prevOffset - 20 : 0));
  }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button type="button" onClick={handlePreviousButton}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextButton}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
    </main>
  );
}

/*


1) Problem

Data are fetched and rendered automatically.
Button to move through lists of fetched data not working.

In the API URL, "offset=0" needs to be changed to at least "offset=20"
to show more data

We need logic to influence "offset=0" by click of one of the buttons

1) 1. for next buttin
1) 2. for previous buttin

2) Plan & Steps

SECOND ATTEMPT:





FIRST ATTEMPT: ❌ made sense, but logic flawed
==> 🟢 attempting to mutate the fetch URL using template literals
xx> ❌ using a conventional var instead of state, trying to mutate the offset of URL in a separate fn


Add event handler into comp ((xx> 🟡 logical flaw: fn as statement into useEffect))
it should create a const with integer, that gets passed to useEffect

2) 1. Add props to Comp, JSX ((App))
xx> 🟡 JSX and fn linked using onClick, maybe prop not needed 'cause evrthng happens inside Comp??


2) 2. Add event handler fn to Comp ((to useEffec))
- declare fn handleNextBtn 
- declare let that can get updated several times
- return

- add to fetchURL using template literals

function handleNextButton() {
  console.log("clicked");
  let offset = 0;
  offset = offset + 20;
  console.log(offset);
  return;
}

xx> scope of var remains within fn, need to have the let outside

let offset = 0;

function handleNextButton() {
  console.log("clicked");
  offset = offset + 20;
  console.log(offset);
  return;
}

xx> still not working, maybe I have to put into the hook after all?




3) Mock Code

Logic breakdown

1. Render the comp and respective data from fetch in the browser
Flow upon btn click
2. Create an appendix to fetch URL upon btn click
3. Pass appendix to fetchURL in useEffect, if button clicked, else do nthng
4. fetch new data and rerender list after btn click


Breakdown props:

Comp <-> JSX <button > == onEvent < > onEvent // maybe not needed??
JSX <-> eventHandler   == onEvent(handleEvent) < > fn handleEvent() {}

*/
