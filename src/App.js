import "./App.css";
import Home from "./components/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Abby Gillham</title>
      </Helmet>
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
