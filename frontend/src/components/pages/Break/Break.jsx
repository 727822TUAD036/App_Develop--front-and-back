import React from 'react';
import '../Break/Break.css';
import { Link } from 'react-router-dom';

const Brake = () => {
  return (
    <div className="brake-page">
      <div className="brake-container">
        <div className="brake-header">
          <h1 className="brake-title">Comprehensive Brake Inspection</h1>
          <p className="brake-description">
            Ensure your safety on the road with our thorough brake inspection service. Our experts will check and maintain your brakes to ensure optimal performance.
          </p>
        </div>
        <div className="brake-content">
          {/* <img src={brakeInspectionImage} alt="Brake Inspection" className="brake-image" /> */}
          <div className="brake-info">
            <h2 className="info-title">Why Regular Brake Inspections?</h2>
            <ul className="info-list">
              <li className="info-item">Enhanced Safety</li>
              <li className="info-item">Preventive Maintenance</li>
              <li className="info-item">Extended Brake Life</li>
              <li className="info-item">Improved Performance</li>
            </ul>
            <Link to="/booking"><button className="book-button">Schedule an Inspection</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brake;
