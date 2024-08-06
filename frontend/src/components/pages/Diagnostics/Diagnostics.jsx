import React from 'react';
import './Diagnostics.css';

const Diagnostics = () => {
  return (
    <div className="diagnostics-container">
      <h1 className="diagnostics-title">Diagnostics</h1>
      <p className="diagnostics-description">
        Using the latest technology, our diagnostics services can identify any issues with your car’s engine, transmission, brakes, and more.
      </p>
      <div className="diagnostics-content">
        <h2>What We Offer</h2>
        <ul>
          <li>Engine diagnostics</li>
          <li>Transmission diagnostics</li>
          <li>Brake diagnostics</li>
          <li>Electrical system diagnostics</li>
          <li>And much more...</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          Our state-of-the-art diagnostic tools ensure accurate and efficient identification of any issues your vehicle may have. Our experienced technicians are trained to handle a wide range of diagnostic services to get you back on the road quickly and safely.
        </p>
      </div>
    </div>
  );
};

export default Diagnostics;
