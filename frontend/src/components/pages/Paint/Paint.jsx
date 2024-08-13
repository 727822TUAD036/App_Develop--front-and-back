import React, { useState } from 'react';
import './Paint.css';

const Paint = () => {
  const [carColor, setCarColor] = useState('#ffffff'); // Default color: white

  const handleColorChange = (event) => {
    setCarColor(event.target.value);
  };

  const handleColorSelect = (color) => {
    setCarColor(color);
  };

  // List of predefined colors
  const colorOptions = [
    { name: 'White', color: '#ffffff' },
    { name: 'Red', color: '#ff0000' },
    { name: 'Blue', color: '#0000ff' },
    { name: 'Green', color: '#00ff00' },
    { name: 'Black', color: '#000000' },
    { name: 'Gray', color: '#808080' }
  ];

  return (
    <div className="paint-container">
      <header className="paint-header">
        <h1>Paint Your Car</h1>
      </header>
      <section className="paint-body">
        <div className="car-display">
          <svg
            width="80%"
            height="60vh"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            className="car-svg"
          >
            {/* Realistic Car Design SVG */}
            <g id="car-body">
              <path
                d="M150 250 L650 250 Q675 250 675 225 L675 200 Q675 150 650 150 L150 150 Q125 150 125 200 L125 225 Q125 250 150 250 Z"
                fill={carColor}
                stroke="#333"
                strokeWidth="3"
              />
              <circle cx="250" cy="275" r="35" fill="#333" />
              <circle cx="250" cy="275" r="15" fill="#666" />
              <circle cx="550" cy="275" r="35" fill="#333" />
              <circle cx="550" cy="275" r="15" fill="#666" />
            </g>
            <g id="car-windows">
              <rect x="175" y="175" width="100" height="50" fill="#b3b3b3" />
              <rect x="525" y="175" width="100" height="50" fill="#b3b3b3" />
              <rect x="300" y="175" width="200" height="50" fill="#b3b3b3" />
            </g>
          </svg>
        </div>
        <div className="controls">
          <div className="color-picker">
            <label htmlFor="color">Choose a color:</label>
            <input
              type="color"
              id="color"
              name="color"
              value={carColor}
              onChange={handleColorChange}
            />
          </div>
          <div className="predefined-colors">
            <p>Or choose from predefined colors:</p>
            <div className="color-options">
              {colorOptions.map((option) => (
                <div
                  key={option.name}
                  className="color-swatch"
                  style={{ backgroundColor: option.color }}
                  onClick={() => handleColorSelect(option.color)}
                  title={option.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paint;
