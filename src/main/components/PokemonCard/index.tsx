export type PokemonTypeProps = {
  name: string;
};

export type PokemonCardProps = {
  order: number;
  name: string;
  figure: string;
  types: PokemonTypeProps[];
};

export function PokemonCard(props: PokemonCardProps) {
  const { order, name, figure, types } = props;

  return (
    <article>
      <div>
        <figure>
          <img src={figure} alt={name} title={name} />
        </figure>

        <ul aria-label="pokemon-type">
          {types.map((type) => (
            <li key={type.name}>{type.name}</li>
          ))}
        </ul>
      </div>
      <p aria-label="pokemon-order">{order}</p>
      <p aria-label="pokemon-name">{name}</p>
    </article>
  );
}
