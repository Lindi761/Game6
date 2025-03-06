import React, { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import '../styles/MobileControls.css';

const MobileControls = () => {
  const { handleKeyDown, handleKeyUp, isLandscape } = useContext(GameContext);

  useEffect(() => {
    console.log('MobileControls mounted');
    console.log('isLandscape:', isLandscape);
  }, [isLandscape]);

  // Handle touch events for mobile controls
  const handleTouchStart = (key) => {
    console.log('Touch start:', key);
    handleKeyDown({ key });
  };

  const handleTouchEnd = (key) => {
    console.log('Touch end:', key);
    handleKeyUp({ key });
  };

  // Create touch event handlers with proper binding
  const createTouchHandlers = (key) => {
    return {
      onTouchStart: (e) => {
        e.preventDefault();
        handleTouchStart(key);
      },
      onTouchEnd: (e) => {
        e.preventDefault();
        handleTouchEnd(key);
      },
      onTouchCancel: (e) => {
        e.preventDefault();
        handleTouchEnd(key);
      },
    };
  };

  console.log('Rendering MobileControls, isLandscape:', isLandscape);

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
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '5px',
        fontSize: '12px',
        zIndex: 2000
      }}>
        Controls Debug: Landscape={isLandscape.toString()}
      </div>
    </div>
  );
};

export default MobileControls; 