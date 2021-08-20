import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const Dropdown = styled.nav<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;
