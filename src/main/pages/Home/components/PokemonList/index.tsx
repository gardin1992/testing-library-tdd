import { PokemonListItem, PokemonListItemProps } from "../PokemonListItem";

type PokemonListProps = {
  pokemons: PokemonListItemProps[];
};

export function PokemonList(props: PokemonListProps) {
  const { pokemons } = props;

  return (
    <section data-testid="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonListItem
          key={`${pokemon.order}_${pokemon.name}`}
          order={pokemon.order}
          name={pokemon.name}
          figure={pokemon.figure}
          types={pokemon.types}
        />
      ))}
    </section>
  );
}
