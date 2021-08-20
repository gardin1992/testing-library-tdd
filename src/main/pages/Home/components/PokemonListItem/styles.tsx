import styled from "styled-components";
import { transparentize } from "polished";

import { colors } from "styles";

export const PokemonListItem = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-left: 27px;
  cursor: pointer;
  position: relative;
  margin: 10px 0;
  text-transform: capitalize;

  &:hover {
    background: ${colors.cBlue};
    color: ${colors.cWhite};
  }
`;
