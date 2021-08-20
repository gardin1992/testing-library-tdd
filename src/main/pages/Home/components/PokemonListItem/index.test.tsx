import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PokemonListItem, PokemonListItemProps } from ".";

it("should render PokemonCard", () => {
  const pokemon: PokemonListItemProps = {
    name: "bulbasaur",
    url: "/bulbasaur",
  };

  render(
    <MemoryRouter>
      <PokemonListItem name={pokemon.name} url={pokemon.url} />
    </MemoryRouter>
  );

  const name = screen.getByText(pokemon.name);
  expect(name).toBeInTheDocument();

  const button = screen.getByTestId("pokemon-list-item");
  fireEvent.click(button);
});

afterEach(cleanup);
