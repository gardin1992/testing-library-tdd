import styled from "styled-components";
import { colors } from "styles";

export const Header = styled.header`
  background-color: ${colors.cBlue};
  color: ${colors.cYellow};
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }

  .c-header--menu {
    position: absolute;
    right: 0;
    top: 20px;
  }

  .dropdown {
    position: absolute;
    width: 100%;
    top: 70px;
    background: #fff;
  }
`;
