import React from 'react';
import './Remove.css';

const Remove = () => {
  return (
    <div className="remove-container">
      <header className="remove-header">
        <h1>Dent Removal Services</h1>
        <p>Restore your vehicle’s appearance with our expert dent removal services.</p>
      </header>
      <section className="remove-details">
        <div className="remove-info">
          <h2>What We Offer</h2>
          <p>
            Our dent removal services use advanced techniques to eliminate dents without affecting your vehicle's original paint.
            Whether it's a minor ding or a more significant dent, our professionals are equipped to handle it with precision.
          </p>
        </div>
        <div className="remove-why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced Technicians: Our team is skilled in using the latest dent removal technology.</li>
            <li>Quality Guarantee: We ensure that the repairs meet the highest standards.</li>
            <li>Fast Service: We strive to complete repairs quickly, minimizing downtime for you.</li>
          </ul>
        </div>
      </section>
      <section className="remove-form">
        <h2>Request a Quote</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Remove;
