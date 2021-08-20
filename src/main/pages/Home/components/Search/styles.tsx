import styled from "styled-components";
import { colors } from "styles";

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 1px solid ${colors.cBlue};

  .c-icon {
    padding: 0 10px;
    border: none;
  }

  input {
    color: ${colors.cBlue};
  }
`;
