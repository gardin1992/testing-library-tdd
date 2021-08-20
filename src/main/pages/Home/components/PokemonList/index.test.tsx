import { render, screen, within } from "@testing-library/react";
import { PokemonList } from ".";
import { PokemonListItemProps } from "../PokemonListItem";

const pokemons: PokemonListItemProps[] = [
  {
    name: "Bulbasaur",
    url: "bulbasaur",
  },
  {
    name: "Charmander",
    url: "charmander",
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
