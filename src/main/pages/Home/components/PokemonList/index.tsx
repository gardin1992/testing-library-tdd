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
          key={`${pokemon.name}`}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </section>
  );
}
