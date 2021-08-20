import { useEffect, useState } from "react";
import { axiosHttpClient } from "services/http/AxiosHttpClient";
import { PokemonList, PokemonListItemProps } from "./components";
import { Search } from "./components/Search";

function HomePage() {
  const [query, setQuery] = useState("");

  const [pokemon, setPokemons] = useState<PokemonListItemProps[]>([]);

  async function fetchPokemons() {
    const data = await axiosHttpClient({
      method: "get",
      url: "pokemon",
    });

    const { results } = data.body;
    setPokemons(results);
  }

  useEffect(() => {
    fetchPokemons().catch((err) => {
      console.log("error on fetching pokemons", err);
    });
  }, []);

  return (
    <div className="c-home-page">
      <Search query={query} setQuery={setQuery} />
      <PokemonList pokemons={pokemon} />
    </div>
  );
}

export default HomePage;
