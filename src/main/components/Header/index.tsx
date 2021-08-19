import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
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
