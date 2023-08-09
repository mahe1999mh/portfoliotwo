import "./App.css";
import Nav from "./Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
