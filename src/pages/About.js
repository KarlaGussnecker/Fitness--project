import { Link } from "react-router-dom";
import "./About.css";

export function About() {
  return (
    <div className="about">
      <Link to="/home">
        <button className="back--btn">BACK HOME</button>
      </Link>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel quam et quam congue luctus. Aenean a tellus sem. Curabitur non est
        sed eros dignissim laoreet ut vel felis. Mauris eget risus odio. Etiam
        convallis sem ut euismod ornare.
      </p>
      <p>
        Maecenas quis risus non est maximus gravida non quis nibh. Sed aliquam
        ex nisi, nec commodo nisl consectetur quis. In lacus arcu, sagittis ut
        erat non, porttitor vulputate ligula. In ornare felis porttitor dui
        pretium pulvinar. Curabitur eget ex eget lectus finibus pellentesque.
      </p>
      In hac habitasse platea dictumst. Nunc sit amet mi nisi. Aenean nisi nisi,
      semper et auctor in, imperdiet quis nunc.
      <p>
        Phasellus pellentesque justo nec dolor hendrerit sodales. Phasellus
        ultricies eleifend congue. Mauris elementum posuere eros in auctor. Sed
        urna enim, gravida sed neque et, mollis suscipit nisl. Donec ac ornare
        neque, sed auctor dui. Integer tortor sem, facilisis vitae vulputate
        eget, semper a ligula. Duis varius purus posuere malesuada cursus.
        Quisque luctus erat et ex luctus venenatis. Aliquam erat volutpat.
      </p>
    </div>
  );
}
