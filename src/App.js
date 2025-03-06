import React, { useEffect, useState } from 'react';
import { GameContextProvider } from './contexts/GameContext';
import Game from './components/Game';
import MobileControls from './components/MobileControls';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      console.log('User Agent:', navigator.userAgent);
      console.log('Is Mobile:', mobile);
      setIsMobile(mobile);
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
        <div style={{position: 'fixed', bottom: 0, left: 0, background: 'rgba(0,0,0,0.5)', color: 'white', padding: '5px', fontSize: '12px'}}>
          Debug: isMobile={isMobile.toString()}
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App; 