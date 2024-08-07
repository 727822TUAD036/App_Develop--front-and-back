import React from 'react';
import './Dent.css';
import { Link } from 'react-router-dom';

const Dent = () => {
  return (
    <div className="dent-container">
      <header className="dent-header">
        <h1>Dent and Paint Services</h1>
        <p>Top-notch services to restore your vehicle's appearance</p>
      </header>
      <section className="dent-services">
        <div className="service-item">
          <Link to = "/Remove"><h2>Dent Removal</h2></Link>
          <p>
            Our expert technicians use the latest techniques to remove dents without damaging your vehicle’s paint.
          </p>
        </div>
        <div className="service-item">
          <h2>Paint Services</h2>
          <p>
            We provide professional paint services to restore the original look of your car, using high-quality materials.
          </p>
        </div>
      </section>
      <section className="dent-form">
        <h2>Inquire About Our Services</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Dent;
