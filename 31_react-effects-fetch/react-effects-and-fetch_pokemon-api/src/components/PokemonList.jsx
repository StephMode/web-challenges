import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, []);

  /*

  Data shall be fetched upon rendering and not upon click event

  1) remove/comment out the button in the component

  2) inplement useEffect hook and nest the loadPkm fn in it so that the data is being fetched automatically
    1) import useEffect
    2) Nest loadPkm inside {}, {} in blue contains code blocks with logic => 1st statement of useEffect
    3) after nested fn, call fn
    4) after code block with logic, add [] dependency array => 2nd statement of useEffect
  */

  return (
    <main>
      {/* <button type="button" onClick={loadPokemon}>
        Load Pokémon
      </button> */}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
