import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment.css'; // Import the CSS for styling
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bookings');
      setAppointments(response.data);
    } catch (error) {
      console.error('There was an error fetching the appointments:', error);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/bookings/${id}`);
      setAppointments(appointments.filter(app => app.id !== id));
    } catch (error) {
      console.error('There was an error deleting the appointment:', error);
    }
  };

  const handleAddAppointment = async () => {
    const name = prompt('Enter customer name');
    const email = prompt('Enter email address');
    const date = prompt('Enter appointment date (YYYY-MM-DD)');
    const time = prompt('Enter appointment time (HH:MM AM/PM)');
    const service = prompt('Enter service');

    const newAppointment = { name, email, date, time, service };

    try {
      const response = await axios.post('http://localhost:8080/api/bookings', newAppointment);
      setAppointments([...appointments, response.data]);
    } catch (error) {
      console.error('There was an error adding the appointment:', error);
    }
  };

  const handleUpdateAppointment = async (id) => {
    const updatedName = prompt('Update customer name');
    const updatedEmail = prompt('Update email address');
    const updatedDate = prompt('Update appointment date (YYYY-MM-DD)');
    const updatedTime = prompt('Update appointment time (HH:MM AM/PM)');
    const updatedService = prompt('Update service');

    const updatedAppointment = {
      name: updatedName || '',
      email: updatedEmail || '',
      date: updatedDate || '',
      time: updatedTime || '',
      service: updatedService || '',
    };

    try {
      await axios.put(`http://localhost:8080/api/bookings/${id}`, updatedAppointment);
      setAppointments(appointments.map(app =>
        app.id === id ? { ...app, ...updatedAppointment } : app
      ));
    } catch (error) {
      console.error('There was an error updating the appointment:', error);
    }
  };

  return (
    <div className="appointment-container">
      <header className="header">
        <h1>Appointments</h1>
      </header>

      <div className="main-content">
        <button className="btn btn-add" onClick={handleAddAppointment}>
          <FaPlus /> Add Appointment
        </button>

        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(app => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.date}</td>
                <td>{app.time}</td>
                <td>{app.service}</td>
                <td>
                  <button className="btn btn-view" onClick={() => setSelectedAppointment(app)}>
                    <FaEye /> View
                  </button>
                  <button className="btn btn-update" onClick={() => handleUpdateAppointment(app.id)}>
                    <FaEdit /> Update
                  </button>
                  <button className="btn btn-delete" onClick={() => handleDeleteAppointment(app.id)}>
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedAppointment && (
          <div className="appointment-details">
            <h2>Appointment Details</h2>
            <div className="detail-frame">
              <strong>Name:</strong>
              <p>{selectedAppointment.name}</p>
            </div>
            <div className="detail-frame">
              <strong>Email:</strong>
              <p>{selectedAppointment.email}</p>
            </div>
            <div className="detail-frame">
              <strong>Date:</strong>
              <p>{selectedAppointment.date}</p>
            </div>
            <div className="detail-frame">
              <strong>Time:</strong>
              <p>{selectedAppointment.time}</p>
            </div>
            <div className="detail-frame">
              <strong>Service:</strong>
              <p>{selectedAppointment.service}</p>
            </div>
            <button className="btn btn-close" onClick={() => setSelectedAppointment(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
