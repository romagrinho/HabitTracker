import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "./Pages/Home/Home";
import HomeMobile from './Pages/HomeMobile/HomeMobile';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const atualizarEstadoTela = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', atualizarEstadoTela);

    return () => {
      window.removeEventListener('resize', atualizarEstadoTela);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? null : <Home />}
      {isMobile && <HomeMobile />}
    </div>
  );
}

export default App;
