import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out",
      once: true,
    });
  }, []);

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
      <div id="ui-right">
        <Projects />
      </div>
    </div>
  );
}

export default App;
