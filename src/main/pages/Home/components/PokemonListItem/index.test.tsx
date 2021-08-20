import { render, screen } from "@testing-library/react";
import { PokemonListItem, PokemonListItemProps } from ".";

it("should render PokemonCard", () => {
  const pokemon: PokemonListItemProps = {
    name: "bulbasaur",
    url: "/bulbasaur",
  };

  render(<PokemonListItem name={pokemon.name} url={pokemon.url} />);

  const name = screen.getByText(pokemon.name);
  expect(name).toBeInTheDocument();
});
