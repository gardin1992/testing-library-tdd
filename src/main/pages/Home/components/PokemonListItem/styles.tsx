import styled from "styled-components";
import { transparentize } from "polished";

import { colors } from "styles";

export const PokemonListItem = styled.article`
  display: flex;
  box-shadow: 1px 1px 10px 2px rgb(0 0 0 / 20%);
  flex-direction: column;
  margin: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;

  &:hover&:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${transparentize(0.7, colors.cBlue)};
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    figure {
      background: ${colors.cGray};
    }
  }

  .pokemon-types li {
    height: 30px;
    width: 85px;
    left: 215px;
    top: 0px;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pokemon-order {
    color: ${colors.cGray};
    font-size: 12px;
    margin: 5px 0;
  }
`;
