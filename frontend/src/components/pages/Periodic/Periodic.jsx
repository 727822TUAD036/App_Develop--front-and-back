import React from 'react';
import './Periodic.css';
import periodic from '../Periodic.png';

const Periodic = () => {
  return (
    <div className="periodic-container">
      <section className="periodic-hero">
        <h1 className="periodic-title">Periodic Maintenance</h1>
        <p className="periodic-subtitle">Keep your car running smoothly with our regular check-ups</p>
      </section>
      <section className="periodic-content">
        <div className="periodic-info">
          <h2>Why Periodic Maintenance?</h2>
          <p>
            Regular maintenance helps to ensure that your vehicle performs efficiently and safely. It can prevent potential issues and save you money on costly repairs in the long run.
          </p>
          <h2>What We Offer</h2>
          <ul>
            <li>Oil and Filter Change</li>
            <li>Tire Rotation and Balance</li>
            <li>Brake Inspection</li>
            <li>Fluid Level Check</li>
            <li>Battery Test</li>
            <li>Multi-point Inspection</li>
          </ul>
          
        </div>
        <div className="periodic-image">
        <img src={periodic} alt="Hub" style={{width:'650px',height:'420px'}} /> 
        </div>
      </section>
    </div>
  );
};

export default Periodic;
