import { useState } from "react";
import { PokemonList } from "./components";
import { Search } from "./components/Search";

const pokemons = [
  {
    order: 1,
    name: "Bulbasaur",
    figure: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: [
      {
        name: "grass",
      },
      {
        name: "poison",
      },
    ],
  },
  {
    order: 4,
    name: "Charmander",
    figure: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: [
      {
        name: "fire",
      },
    ],
  },
];

function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <div className="c-home-page">
      <Search query={query} setQuery={setQuery} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default HomePage;
