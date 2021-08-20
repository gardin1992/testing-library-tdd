import { Link } from "react-router-dom";
import { ReactComponent as MenuSvg } from "assets/icons/menu-close.svg";
import Icon from "../Icon";

function Header() {
  return (
    <header className="c-header">
      <h1>{process.env?.REACT_APP_NAME}</h1>
      <Icon icon={MenuSvg} />
      <nav>
        <ul role="menu" aria-labelledby="navbar">
          <li role="menuitem">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
