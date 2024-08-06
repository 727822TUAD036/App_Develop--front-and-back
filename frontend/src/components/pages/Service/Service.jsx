import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const services = [
    {
      title: 'Periodic Maintenance',
      description: 'Regular check-ups to keep your car running smoothly.',
      fullDescription: 'Our periodic maintenance services include oil changes, tire rotations, brake inspections, and more to ensure your vehicle is always in top condition.',
      icon: 'fa-solid fa-wrench',
      color: '#007bff',
      path: '/periodic'
    },
    {
      title: 'Diagnostics',
      description: 'State-of-the-art diagnostics to identify and fix issues quickly.',
      fullDescription: 'Using the latest technology, our diagnostics services can identify any issues with your car’s engine, transmission, brakes, and more.',
      icon: 'fa-solid fa-laptop-code',
      color: '#28a745',
      path: '/diagnostics'
    },
    {
      title: 'Body Shop',
      description: 'High-quality bodywork and paint services.',
      fullDescription: 'Our body shop services include dent removal, paint touch-ups, and complete bodywork repairs to keep your car looking brand new.',
      icon: 'fa-solid fa-car-crash',
      color: '#dc3545',
      path: '/body'
    },
    {
      title: 'Common Repairs',
      description: 'Expert repairs for common car issues.',
      fullDescription: 'We handle common repairs such as brake replacements, battery changes, and suspension repairs to get you back on the road quickly.',
      icon: 'fa-solid fa-tools',
      color: '#ffc107',
      path: '/common'
    },
    {
      title: 'Value Added Services',
      description: 'Extra services to enhance your car’s performance and look.',
      fullDescription: 'Our value-added services include detailing, performance upgrades, and accessory installations to give your car a personalized touch.',
      icon: 'fa-solid fa-plus-circle',
      color: '#17a2b8',
      path: '/value-added-services'
    }
  ];

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            onClick={() => handleExpand(index)}
          >
            <div className="service-icon" style={{ color: service.color }}>
              <i className={service.icon}></i>
            </div>
            <h2 className="service-item-title">{service.title}</h2>
            <p className="service-item-description">{service.description}</p>
            {expanded === index && (
              <div className="service-item-full-description">
                <p>{service.fullDescription}</p>
                <button
                  className="service-item-button"
                  onClick={() => navigate(service.path)}
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
