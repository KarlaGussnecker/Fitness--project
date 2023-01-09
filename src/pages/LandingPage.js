import "./LandingPage.css";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="home">
      <video
        id="background--video"
        src="https://player.vimeo.com/external/455802460.sd.mp4?s=a3ac79d89597060793234c6303d855fdcc6a377f&profile_id=165&oauth2_token_id=57447761"
        autoPlay
        muted
        loop
      ></video>
      <div className="content">
        <div>
          <h3>"THE ONLY BAD WORKOUT IS THE ONE THAT DIDN'T HAPPEN" --A.S.</h3>
          <Link to="/home">
            <button className="landing--btn">LET'S GO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
