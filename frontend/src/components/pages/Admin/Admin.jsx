import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { FaCalendarAlt, FaWrench, FaUsers, FaChartPie } from 'react-icons/fa';
import './Admin.css';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Admin = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', date: '2024-08-15', time: '10:00 AM', service: 'Oil Change' },
    { id: 2, name: 'Jane Smith', date: '2024-08-16', time: '11:00 AM', service: 'Brake Inspection' },
    { id: 3, name: 'Tom White', date: '2024-08-17', time: '02:00 PM', service: 'Tire Rotation' },
    { id: 4, name: 'Lucy Black', date: '2024-08-18', time: '12:00 PM', service: 'Oil Change' },
  ]);

  const [services, setServices] = useState([
    'Oil Change', 'Brake Inspection', 'Tire Rotation', 'Engine Tune-Up', 'Battery Check'
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Brown', email: 'bob@example.com', role: 'Customer' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Staff' },
    { id: 4, name: 'Diana Adams', email: 'diana@example.com', role: 'Customer' },
  ]);

  const [appointmentCount, setAppointmentCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setAppointmentCount(appointments.length), 500);
    setTimeout(() => setServiceCount(services.length), 1000);
    setTimeout(() => setUserCount(users.length), 1500);
  }, [appointments.length, services.length, users.length]);

  const appointmentsPerService = services.map(service =>
    appointments.filter(app => app.service === service).length
  );

  const userRoles = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: services,
    datasets: [
      {
        label: 'Appointments',
        data: appointmentsPerService,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: Object.keys(userRoles),
    datasets: [
      {
        label: 'User Distribution',
        data: Object.values(userRoles),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <Link to ="/appointment"><li><a href="#appointments"><FaCalendarAlt className="sidebar-icon" /> Appointments</a></li></Link>
          <li><a href="#services"><FaWrench className="sidebar-icon" /> Services</a></li>
          <Link to = "/members"><li><a href="#users"><FaUsers className="sidebar-icon" /> Users</a></li></Link>
          <li><a href="#charts"><FaChartPie className="sidebar-icon" /> Analytics</a></li>
        </ul>
      </aside>

      <div className="content">
        <div className="dashboard-overview">
          <div className="overview-card">
            <div className="progress-circle" data-value={appointmentCount}>
              <div className="inner-circle">
                <span>{appointmentCount}</span>
              </div>
            </div>
            <h3>Total Appointments</h3>
          </div>
          <div className="overview-card">
            <div className="progress-circle" data-value={serviceCount}>
              <div className="inner-circle">
                <span>{serviceCount}</span>
              </div>
            </div>
            <h3>Total Services</h3>
          </div>
          <div className="overview-card">
            <div className="progress-circle" data-value={userCount}>
              <div className="inner-circle">
                <span>{userCount}</span>
              </div>
            </div>
            <h3>Total Users</h3>
          </div>
        </div>

        <section id="charts" className="section charts-section">
          <h2>Analytics</h2>
          <div className="chart-container">
            <div className="chart-card">
              <h3>Appointments per Service</h3>
              <Bar data={barChartData} options={chartOptions} />
            </div>
            <div className="chart-card">
              <h3>User Distribution</h3>
              <Pie data={pieChartData} options={chartOptions} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
