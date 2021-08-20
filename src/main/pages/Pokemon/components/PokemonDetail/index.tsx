import { leadingZeros } from "utils/strings";
import * as S from "./styles";

export type PokemonTypeProps = {
  name: string;
};

export type PokemonDetailProps = {
  order: number;
  name: string;
  figure: string;
  types: PokemonTypeProps[];
};

export function PokemonDetail(props: PokemonDetailProps) {
  const { order, name, figure, types } = props;

  return (
    <S.PokemonDetail data-testid="pokemon-detail">
      <div className="heading">
        <figure>
          <img src={figure} alt={name} title={name} />
        </figure>

        <ul className="pokemon-types" aria-label="pokemon-type">
          {types.map((type) => (
            <li key={type.name}>{type.name}</li>
          ))}
        </ul>
      </div>
      <p className="pokemon-order" aria-label="pokemon-order">
        Nº {leadingZeros(order, 3)}
      </p>
      <p className="pokemon-name" aria-label="pokemon-name">
        {name}
      </p>
    </S.PokemonDetail>
  );
}
