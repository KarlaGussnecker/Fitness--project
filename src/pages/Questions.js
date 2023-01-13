import Faq from "react-faq-component";
import "./Questions.css";
import { Link } from "react-router-dom";

export function Questions() {
  const data = {
    title: "FREQUENTLY ASKED QUESTIONS",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel quam et quam congue luctus. Aenean a tellus sem. Curabitur non est sed eros dignissim laoreet ut vel felis. Mauris eget risus odio. Etiam convallis sem ut euismod ornare. Maecenas quis risus non est maximus gravida non quis nibh. Sed aliquam ex nisi, nec commodo nisl consectetur quis. In lacus arcu, sagittis ut erat non, porttitor vulputate ligula. In ornare felis porttitor dui pretium pulvinar. Curabitur eget ex eget lectus finibus pellentesque. In hac habitasse platea dictumst. Nunc sit amet mi nisi. Aenean nisi nisi, semper et auctor in, imperdiet quis nunc. ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nulla sit amet ligula faucibus, tincidunt nunc vitae, tincidunt eros. Fusce placerat placerat quam. Maecenas fringilla magna elit, et vulputate nunc congue a. Proin porta sem et ligula ultrices, non accumsan quam ornare. Sed tempor sed turpis at scelerisque. Nulla mattis odio vel magna lobortis molestie. Maecenas quis quam ac sapien tristique vestibulum vitae vel dolor. Phasellus non metus id nisi blandit pellentesque. Nulla eget dui ultrices diam aliquam rutrum.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Phasellus pellentesque justo nec dolor hendrerit sodales. Phasellus ultricies eleifend congue. Mauris elementum posuere eros in auctor. Sed urna enim, gravida sed neque et, mollis suscipit nisl. Donec ac ornare neque, sed auctor dui. Integer tortor sem, facilisis vitae vulputate eget, semper a ligula. Duis varius purus posuere malesuada cursus. Quisque luctus erat et ex luctus venenatis. Aliquam erat volutpat.",
      },
      {
        title: "Phasellus blandit mollis magna eu consectetur",
        content:
          "Phasellus blandit mollis magna eu consectetur. Ut libero orci, luctus et nisi quis, sagittis sagittis purus. Donec egestas enim condimentum risus pharetra iaculis a eu nisi. Vestibulum ex lorem, iaculis id eros in, viverra commodo lorem. Donec vel consectetur est. Integer accumsan, urna et malesuada tristique, risus magna semper metus, non molestie metus ex molestie augue. Pellentesque non neque feugiat, vestibulum diam in, hendrerit neque. Integer at gravida sapien. Sed congue sodales massa vestibulum bibendum. Pellentesque congue sed massa nec facilisis. Aliquam eget tempor nulla. Phasellus dapibus, libero vel tempor iaculis, massa mi aliquet turpis, ac fringilla ligula nisl et lectus.",
      },
    ],
    styles: {
      titleTextColor: "grey",
      titleTextSize: "30px",
      rowTitleColor: "#194D33",
      rowTitleTextSize: "medium",
      rowContentColor: "grey",
      rowContentTextSize: "16px",
      rowContentPaddingTop: "10px",
      rowContentPaddingBottom: "10px",
      rowContentPaddingLeft: "50px",
      rowContentPaddingRight: "150px",
      arrowColor: "orange",
      transitionDuration: "1s",
      timingFunc: "ease",
    },
  };
  return (
    <div className="questions">
      <div>
        <Link to="/home">
          <button className="back--btn">BACK HOME</button>
        </Link>
      </div>
      <Faq data={data} styles={data.styles} />
    </div>
  );
}
