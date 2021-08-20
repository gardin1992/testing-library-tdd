export type PokemonTypeModel = {
  name: string;
};

export type PokemonModel = {
  order: number;
  name: string;
  figure: string;
  types: PokemonTypeModel[];
};
