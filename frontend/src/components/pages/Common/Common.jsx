import React from 'react';
import './Common.css';
import { Link } from 'react-router-dom';

const Common = () => {
  return (
    <div className="common-page">
      <div className="common-container">
        <h1 className="common-title">Common Repairs</h1>
        <p className="common-description">
          Discover our range of common repair services designed to keep your vehicle in top shape.
        </p>
        <div className="repair-list">
          <div className="repair-item">
            <div className="repair-icon">&#128663;</div>
            <Link to="/oil"><h2 className="repair-title">Oil Change</h2></Link>
            <p className="repair-description">
              Regular oil changes help to keep your engine running smoothly and efficiently.
            </p>
          </div>
          <div className="repair-item">
            <div className="repair-icon">&#128295;</div>
            <Link to ="/break"><h2 className="repair-title">Brake Inspection</h2></Link>
            <p className="repair-description">
              Ensure your braking system is responsive and safe with our thorough inspections.
            </p>
          </div>
          <div className="repair-item">
            <div className="repair-icon">&#128665;</div>
            <h2 className="repair-title">Tire Rotation</h2>
            <p className="repair-description">
              Enhance tire longevity and performance with regular rotation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
