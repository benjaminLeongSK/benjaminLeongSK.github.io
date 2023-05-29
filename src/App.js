import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [toogleMedia, setToogleMedia] = useState(false);
    const handleToggle = () => {
        setToogleMedia(!toogleMedia);
    }
  return (
    <div>
      <Navbar handleToggle={handleToggle} toogleMedia={toogleMedia}/>
      <Home toogleMedia={toogleMedia}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
