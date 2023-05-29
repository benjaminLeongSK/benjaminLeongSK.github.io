import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Resume from "./components/Resume";
import BackUp from "./components/BackUp";


function App() {
  const [toogleMedia, setToogleMedia] = useState(false);
  
  const handleToggle = () => {
        setToogleMedia(!toogleMedia);
  }


  
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar handleToggle={handleToggle} toogleMedia={toogleMedia}/>
                <Home toogleMedia={toogleMedia}/>
                <About />
                <Skills />
                <Projects />
                <Contact />
                <BackUp />
              </>
              }
          />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
