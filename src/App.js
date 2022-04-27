import "./App.css";
import data from "./assets/data.json";

function App() {
  return <h1>{data.map(data.category)}</h1>;
}

export default App;
