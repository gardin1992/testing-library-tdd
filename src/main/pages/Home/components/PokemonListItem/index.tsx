import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  function handleOnClick() {
    history.push(`/pokemon/${name}`);
  }

  return (
    <S.PokemonListItem data-testid="pokemon-list-item" onClick={handleOnClick}>
      <p className="pokemon-name" aria-label="pokemon-name">
        {name}
      </p>
    </S.PokemonListItem>
  );
}

PokemonListItem.defaultProps = {
  onClick: undefined,
};
