import { HomePage } from "main/pages";

type RouteType = {
  path: string;
  component: React.FC;
  exact?: boolean;
  name: string;
};

function PokemonDetailPage() {
  return <div>PokemonDetailPage</div>;
}

export const routes: RouteType[] = [
  {
    path: "/",
    component: HomePage,
    exact: true,
    name: "Home",
  },
  {
    path: "/pokemons/[:name]",
    component: PokemonDetailPage,
    exact: true,
    name: "PokemonDetail",
  },
];
