import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div id="ui-left">
        <Header />
        <Hero />
        <div id="ui-left-bottom">
          <Education />
          <Skills />
        </div>
      </div>
      <div id="ui-right">Projects</div>
    </div>
  );
}

export default App;
