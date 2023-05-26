import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from 'react';

function App() {
  const [toogleMedia, setToogleMedia] = useState(false);
    const handleToggle = () => {
        setToogleMedia(!toogleMedia);
    }
  return (
    <div>
      <Navbar handleToggle={handleToggle} toogleMedia={toogleMedia}/>
      <Home toogleMedia={toogleMedia}/>
    </div>
  );
}

export default App;
