import { render, screen, within } from "@testing-library/react";
import { PokemonDetail, PokemonDetailProps } from ".";

it("should render PokemonCard", () => {
  const pokemon: PokemonDetailProps = {
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
  };

  render(
    <PokemonDetail
      order={pokemon.order}
      name={pokemon.name}
      figure={pokemon.figure}
      types={pokemon.types}
    />
  );

  const name = screen.getByText(pokemon.name);
  expect(name).toBeInTheDocument();

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(pokemon.types.length);
});
