import { ReactComponent as MenuClosed } from "assets/icons/menu-closed.svg";
import { ReactComponent as MenuOpened } from "assets/icons/menu-opened.svg";
import { useState } from "react";
import { colors } from "styles";
import Icon from "../Icon";
import { Dropdown } from "./Dropdown";
import * as S from "./styles";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function onOpenMenu(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenu(true);
  }

  function onCloseMenu(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenu(false);
  }

  return (
    <S.Header className="c-header">
      <h1>{process.env?.REACT_APP_NAME}</h1>
      <Icon
        icon={openMenu ? MenuOpened : MenuClosed}
        variant="c-header--menu"
        color={colors.cYellow}
        title="header-menu"
        onClick={openMenu ? onCloseMenu : onOpenMenu}
      />
      <Dropdown
        open={openMenu}
        onCloseMenu={() => {
          setOpenMenu(false);
        }}
      />
    </S.Header>
  );
}

export default Header;
