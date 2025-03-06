import React, { useContext, useEffect, useRef } from 'react';
import { GameContext } from '../contexts/GameContext';
import '../styles/Game.css';

const Game = () => {
  const gameRef = useRef(null);
  const { 
    gameOver, 
    setGameOver, 
    score, 
    setScore, 
    highScore, 
    setHighScore,
    keysPressed 
  } = useContext(GameContext);

  // Game loop
  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    
    const gameLoop = (timestamp) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Handle movement based on keys pressed
      if (keysPressed['ArrowLeft']) {
        // Move left
        console.log('Moving left');
      }
      if (keysPressed['ArrowRight']) {
        // Move right
        console.log('Moving right');
      }
      if (keysPressed['ArrowUp']) {
        // Move up
        console.log('Moving up');
      }
      if (keysPressed['ArrowDown']) {
        // Move down
        console.log('Moving down');
      }
      
      // Update game state
      updateGame(deltaTime);
      
      // Render game
      renderGame();
      
      // Continue the game loop
      if (!gameOver) {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };
    
    // Start the game loop
    animationFrameId = requestAnimationFrame(gameLoop);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [keysPressed, gameOver]);
  
  // Update game state
  const updateGame = (deltaTime) => {
    // Game logic here
  };
  
  // Render game
  const renderGame = () => {
    // Rendering logic here
  };

  return (
    <div className="game-container">
      <div className="game-area" ref={gameRef}>
        {/* Game content here */}
        <div className="game-info">
          <div className="score">Score: {score}</div>
          <div className="high-score">High Score: {highScore}</div>
        </div>
        {gameOver && (
          <div className="game-over">
            <h2>Game Over</h2>
            <button onClick={() => setGameOver(false)}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game; 