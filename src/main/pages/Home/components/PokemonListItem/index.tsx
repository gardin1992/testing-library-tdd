export type PokemonTypeProps = {
  name: string;
};

export type PokemonListItemProps = {
  order: number;
  name: string;
  figure: string;
  types: PokemonTypeProps[];
  role?: string;
};

export function PokemonListItem(props: PokemonListItemProps) {
  const { order, name, figure, types } = props;

  return (
    <article data-testid="pokemon-list-item">
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

PokemonListItem.defaultProps = {
  role: "",
};
