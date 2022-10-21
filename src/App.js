import "./styles.css";
import "./mvp.css";
import Cats from "./Cat.js";
import Search from "./Search.js";

export default function App({ cats }) {
  return (
    <div className="App">
      <Search cats={cats} />
    </div>
  );
}
