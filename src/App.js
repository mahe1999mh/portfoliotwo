import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Nav setOpen={setOpen} open={open}/>
    {!open && (
      <> <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </>
    )} 

      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </div>
  );
}

export default App;
