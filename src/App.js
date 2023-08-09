import "./App.css";
import Nav from "./Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />

      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </div>
  );
}

export default App;
