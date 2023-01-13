import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav">
      <Link to="/signup">
        <button className="nav--signup">SIGN UP</button>
      </Link>
      <ul>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/questions">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
