import { Link } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
  return (
    <div className="notFound">
      <Link to="/home">
        <button className="back--btn">BACK HOME</button>
      </Link>
    </div>
  );
}
