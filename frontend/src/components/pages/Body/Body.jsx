import React from 'react';
import './Body.css';
import bodyimg from '../bodyimg.png';

const Body = () => {
  return (
    <div className="body-container">
      <section className="body-hero">
        <h1 className="body-title">Body Shop</h1>
        <p className="body-subtitle">High-quality bodywork and paint services to keep your car looking brand new</p>
      </section>
      <section className="body-content">
        <div className="body-info">
          <h2>Why Choose Our Body Shop?</h2>
          <p>
            Our experienced technicians use the highest quality materials and state-of-the-art equipment to ensure your car looks as good as new. We handle everything from minor dents to major collision repairs with precision and care.
          </p>
          <h2>Our Services</h2>
          <ul>
            <li>Dent Removal</li>
            <li>Paint Touch-ups</li>
            <li>Full Bodywork Repairs</li>
            <li>Scratch and Scuff Repairs</li>
            <li>Collision Repair</li>
          </ul>
        </div>
        <div className="body-image">
        <img src={bodyimg} alt="Hub" style={{width:'650px',height:'420px'}} /> 
        </div>
      </section>
    </div>
  );
};

export default Body;
