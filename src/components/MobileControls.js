import React, { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import '../styles/MobileControls.css';

const MobileControls = () => {
  const { handleKeyDown, handleKeyUp, isLandscape } = useContext(GameContext);

  // Handle touch events for mobile controls
  const handleTouchStart = (key) => {
    handleKeyDown({ key });
  };

  const handleTouchEnd = (key) => {
    handleKeyUp({ key });
  };

  // Create touch event handlers with proper binding
  const createTouchHandlers = (key) => {
    return {
      onTouchStart: () => handleTouchStart(key),
      onTouchEnd: () => handleTouchEnd(key),
      onTouchCancel: () => handleTouchEnd(key),
    };
  };

  return (
    <div className={`mobile-controls ${isLandscape ? 'landscape' : 'portrait'}`}>
      {isLandscape ? (
        // Landscape layout with directional keys on both sides
        <>
          <div className="left-controls">
            <div className="directional-keys">
              <button className="control-btn left-btn" {...createTouchHandlers('ArrowLeft')}>
                ←
              </button>
              <button className="control-btn right-btn" {...createTouchHandlers('ArrowRight')}>
                →
              </button>
            </div>
          </div>
          <div className="right-controls">
            <div className="directional-keys">
              <button className="control-btn up-btn" {...createTouchHandlers('ArrowUp')}>
                ↑
              </button>
              <button className="control-btn down-btn" {...createTouchHandlers('ArrowDown')}>
                ↓
              </button>
            </div>
          </div>
        </>
      ) : (
        // Portrait layout
        <div className="portrait-controls">
          <button className="control-btn" {...createTouchHandlers('ArrowLeft')}>
            ←
          </button>
          <button className="control-btn" {...createTouchHandlers('ArrowRight')}>
            →
          </button>
          <button className="control-btn" {...createTouchHandlers('ArrowUp')}>
            ↑
          </button>
          <button className="control-btn" {...createTouchHandlers('ArrowDown')}>
            ↓
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileControls; 