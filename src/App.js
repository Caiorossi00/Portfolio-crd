import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div id="ui-left">
        <Header />
        <Hero />
      </div>
      <div id="ui-right">Projects</div>
    </div>
  );
}

export default App;
