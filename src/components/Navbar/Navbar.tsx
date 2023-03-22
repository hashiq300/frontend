import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="">
          <h1>GS</h1>
        </Link>
      </div>
      <ul className="links">
        <li>
          <Link to="#">HOME</Link>
        </li>
        <li>
          <Link to="#">SHOP</Link>
        </li>
        <li>
          <Link to="#">SELL</Link>
        </li>
        <li>
          <Link to="#">COMPLAINTS</Link>
        </li>
        <li>
          <Link to="#">WHY US?</Link>
        </li>
        <li>
          <Link to="#">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
