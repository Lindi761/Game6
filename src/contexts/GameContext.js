import React, { useState, useEffect } from 'react';

const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [keysPressed, setKeysPressed] = useState({});
  
  // Detect orientation changes
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle key down events
  const handleKeyDown = (event) => {
    const { key } = event;
    setKeysPressed(prev => ({ ...prev, [key]: true }));
  };
  
  // Handle key up events
  const handleKeyUp = (event) => {
    const { key } = event;
    setKeysPressed(prev => ({ ...prev, [key]: false }));
  };
  
  // Add keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameOver,
        setGameOver,
        score,
        setScore,
        highScore,
        setHighScore,
        isLandscape,
        keysPressed,
        handleKeyDown,
        handleKeyUp
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
export default GameContextProvider; 