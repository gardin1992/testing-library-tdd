import { useOutsideClick } from "main/hooks/useOutsideClick";
import { useRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

type DropdownProps = {
  open: boolean;
  onCloseMenu: () => void;
};

export function Dropdown(props: DropdownProps) {
  const { open, onCloseMenu } = props;

  function handleLinkClick() {
    onCloseMenu();
  }

  const wrapperRef = useRef<HTMLElement>(null);
  useOutsideClick(wrapperRef, handleLinkClick);

  return (
    <S.Dropdown className="dropdown" ref={wrapperRef} isOpen={open}>
      <ul role="menu" aria-labelledby="navigation-menu">
        <li role="menuitem">
          <Link to="/">Home</Link>
        </li>
        <li role="menuitem">
          <Link to="/maps">Mapas</Link>
        </li>
        <li role="menuitem">
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </S.Dropdown>
  );
}
