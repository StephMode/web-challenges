import "./styles.css";

export default function App() {
  return <Article></Article>;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Heading</h2>
      <label htmlFor="textInput">Write some text here:</label>
      <input id="textInput" type="text"></input>
      <a
        className="article__link"
        href="https://www.joshwcomeau.com/javascript/statements-vs-expressions/"
      >
        Check out this nice article by Josh Comeau
      </a>
    </article>
  );
}
