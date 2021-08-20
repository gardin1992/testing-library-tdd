import { render, screen, within } from "@testing-library/react";
import { PokemonList } from ".";

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

it("should render PokemonList", () => {
  render(<PokemonList pokemons={pokemons} />);
  const list = screen.getByTestId("pokemon-list");
  expect(list).toBeInTheDocument();

  const { getAllByTestId } = within(list);
  const items = getAllByTestId("pokemon-list-item");
  expect(items.length).toBe(pokemons.length);
});
