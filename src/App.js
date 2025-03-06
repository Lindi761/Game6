import React, { useEffect, useState } from 'react';
import { GameContextProvider } from './contexts/GameContext';
import Game from './components/Game';
import MobileControls from './components/MobileControls';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="App">
      <GameContextProvider>
        <Game />
        {isMobile && <MobileControls />}
      </GameContextProvider>
    </div>
  );
}

export default App; 