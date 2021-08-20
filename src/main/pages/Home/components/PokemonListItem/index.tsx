import * as S from "./styles";

export type PokemonTypeProps = {
  name: string;
};

export type PokemonListItemProps = {
  name: string;
  url: string;
};

export function PokemonListItem(props: PokemonListItemProps) {
  const { name } = props;

  return (
    <S.PokemonListItem data-testid="pokemon-list-item">
      <p className="pokemon-name" aria-label="pokemon-name">
        {name}
      </p>
    </S.PokemonListItem>
  );
}
