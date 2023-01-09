import "./Home.css";
import { Navbar } from "./Navbar";

export function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>WELCOME TO FITZONE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel quam et quam congue luctus. Aenean a tellus sem. Curabitur non est
          sed eros dignissim laoreet ut vel felis. Mauris eget risus odio. Etiam
          convallis sem ut euismod ornare. Maecenas quis risus non est maximus
          gravida non quis nibh. Sed aliquam ex nisi, nec commodo nisl
          consectetur quis. In lacus arcu, sagittis ut erat non, porttitor
          vulputate ligula. In ornare felis porttitor dui pretium pulvinar.
          Curabitur eget ex eget lectus finibus pellentesque. In hac habitasse
          platea dictumst. Nunc sit amet mi nisi. Aenean nisi nisi, semper et
          auctor in, imperdiet quis nunc.
        </p>
      </div>
    </div>
  );
}
