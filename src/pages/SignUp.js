import { Link } from "react-router-dom";
import { Widget } from "@typeform/embed-react";
import "./SignUp.css";

export function SignUp() {
  return (
    <div className="signup">
      <div>
        <Link to="/home">
          <button className="back--btn">BACK HOME</button>
        </Link>
      </div>
      <div>
        <Widget id="hnTJtMRF" className="my-form" />;
      </div>
    </div>
  );
}
