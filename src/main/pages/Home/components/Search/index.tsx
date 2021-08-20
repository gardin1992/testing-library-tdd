import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { Icon } from "main/components/Icon";
import { colors } from "styles";
import * as S from "./styles";

type SearchProps = {
  query: string;
  setQuery: any;
};

export function Search(props: SearchProps) {
  const { query, setQuery } = props;

  return (
    <S.Search className="c-input-search">
      <Icon icon={SearchIcon} color={colors.cBlue} title="input-search" />
      <input
        aria-label="search-input"
        placeholder="Buscar Pokemon"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </S.Search>
  );
}
