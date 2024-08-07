import React from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';
import './Value.css';

const services = [
  { id: 1, name: 'Service 1', description: 'Detailed description of value-added service 1.' },
  { id: 2, name: 'Service 2', description: 'Detailed description of value-added service 2.' },
  { id: 3, name: 'Service 3', description: 'Detailed description of value-added service 3.' },
];

const Value = () => {
  const headerSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { tension: 220, friction: 20 },
  });

  const trail = useTrail(services.length, {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 220, friction: 20 },
  });

  return (
    <div className="value-container">
      <animated.div style={headerSpring} className="value-header">
        <h1>Our Value-Added Services</h1>
        <p>Enhancing your experience with our top-notch services</p>
      </animated.div>
      <div className="value-content">
        {trail.map((style, index) => (
          <animated.div key={services[index].id} style={style} className="service-item">
            <h2>{services[index].name}</h2>
            <p>{services[index].description}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Value;
