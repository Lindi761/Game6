import React, { useState, useEffect } from 'react';

const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  
  // Detect orientation changes
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameOver,
        score,
        highScore,
        isLandscape,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider; 