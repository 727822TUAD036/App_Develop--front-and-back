import React from 'react';
import './Oil.css';
import { Link } from 'react-router-dom';

// import oilChangeImage from '../oil-change.jpg'; // Ensure this path is correct

const Oil = () => {
  return (
    <div className="oil-page">
      <div className="oil-container">
        <div className="oil-header">
          <h1 className="oil-title">Premium Oil Change Service</h1>
          <p className="oil-description">
            Keep your engine running smoothly with our top-quality oil change service. Experience the difference in performance and efficiency.
          </p>
        </div>
        <div className="oil-content">
          {/* <img src={oilChangeImage} alt="Oil Change" className="oil-image" /> */}
          <div className="oil-info">
            <h2 className="info-title">Why Choose Us?</h2>
            <ul className="info-list">
              <li className="info-item">High-Quality Oil</li>
              <li className="info-item">Experienced Technicians</li>
              <li className="info-item">Quick Service</li>
              <li className="info-item">Competitive Pricing</li>
            </ul>
            <Link to="/booking"><button className="book-button">Book an Appointment</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oil;
