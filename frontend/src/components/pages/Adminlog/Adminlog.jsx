import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminlog.css'; // Ensure this path is correct for your project

const AdminLog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      window.location.href = '/admin/dashboard';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-log-wrapper">
      <div className="admin-log-container">
        <div className="admin-log-header">
          <h2>Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="admin-log-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <Link to="/admin"><button type="submit" className="login-button">Login</button></Link>
        </form>
        <div className="admin-log-footer">
          <p>Forgot your password? <Link to="/reset-password">Reset here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default AdminLog;
