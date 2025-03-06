import React, { useEffect, useState } from 'react';
import { GameContextProvider } from './contexts/GameContext';
import Game from './components/Game';
import MobileControls from './components/MobileControls';
import './App.css';

function App() {
  // Force isMobile to be true
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Keep the resize listener just in case we need it later
    const checkMobile = () => {
      console.log('Mobile controls should be visible');
      setIsMobile(true); // Always true
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
        <MobileControls /> {/* Always render MobileControls */}
        <div style={{position: 'fixed', bottom: 0, left: 0, background: 'rgba(0,0,0,0.5)', color: 'white', padding: '5px', fontSize: '12px'}}>
          Debug: isMobile={isMobile.toString()}
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App; 