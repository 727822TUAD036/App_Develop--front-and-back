import React from 'react';
import './About.css';
import about from '../about.png';


const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Your Trusted Car Service Experts</p>
      </section>
      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At AutoGarage, we are dedicated to providing top-quality car maintenance and repair services. Our mission is to ensure that your vehicle is in the best condition, offering you a safe and smooth driving experience.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team of experienced professionals is passionate about cars and committed to delivering exceptional service. From routine maintenance to complex repairs, we have the expertise to handle all your automotive needs.
          </p>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of services including periodic maintenance, diagnostics, and body shop services. We use the latest technology and equipment to ensure your car receives the best care possible.
          </p>
          <h2>Why Choose Us?</h2>
          <p>
            With years of experience and a customer-centric approach, we have built a reputation for reliability and excellence. Our goal is to exceed your expectations and build a lasting relationship based on trust and satisfaction.
          </p>
        </div>
        <div className="about-image">
        <img src={about} alt="Hub" style={{width:'550px',height:'350px'}} /> 
        </div>
      </section>
    </div>
  );
};

export default About;
