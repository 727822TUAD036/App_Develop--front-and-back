import React, { useState } from 'react';
import './Booking.css';
import community from '../community.png'; // Adjust the path as necessary

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
  });

  const services = [
    'Oil Change',
    'Brake Inspection',
    'Tire Rotation',
    'Engine Tune-Up',
    'Battery Check',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    alert('Appointment booked successfully!');
  };

  return (
    <div className="booking-page-2737">
      <div className="booking-background-2737" style={{ backgroundImage: `url(${community})` }}></div>
      <div className="booking-container-2737">
        <h2>Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="booking-form-2737">
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Appointment Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Appointment Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Choose Service:
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;