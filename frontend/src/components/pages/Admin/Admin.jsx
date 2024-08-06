import React, { useState } from 'react';
import './Admin.css';
import { color } from 'chart.js/helpers';

const Admin = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', date: '2024-08-15', time: '10:00 AM', service: 'Oil Change' },
    { id: 2, name: 'Jane Smith', date: '2024-08-16', time: '11:00 AM', service: 'Brake Inspection' },
  ]);

  const [services, setServices] = useState([
    'Oil Change', 'Brake Inspection', 'Tire Rotation', 'Engine Tune-Up', 'Battery Check'
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Brown', email: 'bob@example.com' },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const handleAddService = () => {
    const newService = prompt('Enter new service');
    if (newService && !services.includes(newService)) {
      setServices([...services, newService]);
    }
  };

  const handleRemoveService = (serviceToRemove) => {
    setServices(services.filter(service => service !== serviceToRemove));
  };

  const handleUpdateAppointment = (id) => {
    const updatedName = prompt('Update name');
    const updatedDate = prompt('Update date (YYYY-MM-DD)');
    const updatedTime = prompt('Update time (HH:MM AM/PM)');
    const updatedService = prompt('Update service');

    setAppointments(appointments.map(app =>
      app.id === id
        ? { ...app, name: updatedName || app.name, date: updatedDate || app.date, time: updatedTime || app.time, service: updatedService || app.service }
        : app
    ));
  };

  return (
    <div className="admin-page-2737">
      <div className="admin-dashboard-container-2737">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-stats-2737">
          <div className="stat-card-2737">
            <h3>Appointments</h3>
            <p>{appointments.length}</p>
          </div>
          <div className="stat-card-2737">
            <h3>Services</h3>
            <p>{services.length}</p>
          </div>
          <div className="stat-card-2737">
            <h3>Users</h3>
            <p>{users.length}</p>
          </div>
        </div>
      </div>

      <div className="admin-section-container-2737">
        <div className="admin-section-2737">
          <h2>Manage Appointments</h2>
          <table className="appointments-table-2737">
            <thead>
              <tr>
                <th>Name</th>
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
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td>{app.service}</td>
                  <td>
                    <button onClick={() => setSelectedAppointment(app)}>View</button>
                    <button onClick={() => handleUpdateAppointment(app.id)}>Update</button>
                    <button onClick={() => handleDeleteAppointment(app.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedAppointment && (
            <div className="appointment-details-2737">
              <h3>Appointment Details</h3>
              <p>Name: {selectedAppointment.name}</p>
              <p>Date: {selectedAppointment.date}</p>
              <p>Time: {selectedAppointment.time}</p>
              <p>Service: {selectedAppointment.service}</p>
              <button onClick={() => setSelectedAppointment(null)}>Close</button>
            </div>
          )}
        </div>

        <div className="admin-section-2737">
          <h2>Manage Services</h2>
          <ul className="services-list-2737">
            {services.map((service, index) => (
              <li key={index}>
                {service}
                <button onClick={() => handleRemoveService(service)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddService}>Add Service</button>
        </div>

        <div className="admin-section-2737">
          <h2>User Management</h2>
          <ul className="users-list-2737">
            {users.map(user => (
              <li key={user.id}>
                {user.name} - {user.email}
                <button onClick={() => alert(`Update user ${user.id}`)}>Update</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
