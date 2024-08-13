import './About.css';
import about from '../about.png';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '#contactSection', link: '#contactLink' },
        { id: '#priceSection', link: '#priceLink' },
        { id: '#servicesSection', link: '#servicesLink' },
        { id: '#teamSection', link: '#teamLink' },
        { id: '#portfolioSection', link: '#portfolioLink' },
        { id: '#aboutSection', link: '#aboutLink' },
        { id: '#topSection', link: '#topLink' },
      ];

      for (let section of sections) {
        const target = document.querySelector(section.id);
        if (target && window.scrollY >= target.offsetTop - window.innerHeight / 2) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          document.querySelector(section.link).classList.add('active');
          break;
        }
      }

      if (window.scrollY >= 110) {
        document.querySelector('.nav-bar').classList.add('scrolled');
      } else {
        document.querySelector('.nav-bar').classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Your Trusted Car Service Experts</p>
      </section>
      <div className="nav-bar">
        <div className="nav-logo">AUTOGARAGE</div>
        <div className="nav-links-container">
          <Link to="/home" className="nav-link active" id="topLink">Home</Link>
          <Link to="/Contact" className="nav-link" id="aboutLink">Contact</Link>
          <Link to="/Service" className="nav-link" id="teamLink">Service</Link>
          <div className="nav-link services-dropdown">
            Select
            <ul className="dropdown-menu">
              <Link to="/periodic"><li>Periodic Maintenance Service</li></Link>
              <Link to="/diagnostics"><li>Scanning & Diagnostics</li></Link>
              <Link to="/Value"><li>Value Added Service</li></Link>
              <Link to="/booking"><li>Book An Appointment</li></Link>
              <li>Body Service</li>
            </ul>
          </div>
          <Link to="/faqs" className="nav-link" id="priceLink">FAQs</Link>
          <Link to="/About" className="nav-link" id="portfolioLink">About</Link>
          <Link to="/welcome" className="nav-link">Logout</Link>
        </div>
      </div>
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
          <img src={about} alt="Hub" />
        </div>
      </section>
    </div>
  );
};

export default About;
