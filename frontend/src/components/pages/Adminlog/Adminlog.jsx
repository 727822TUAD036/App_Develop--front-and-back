import React, { useState } from 'react';
import '../Adminlog/Adminlog.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';


const AdminLog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here. For now, it's a placeholder.
    if (username === 'admin' && password === 'password') {
      // Redirect to admin dashboard on successful login
      window.location.href = '/admin/dashboard'; // Replace with proper navigation logic if using React Router
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <><div>
        <div className="admin-log-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit} className="admin-log-form">
              <label htmlFor="username">Username:</label>
              <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
              <label htmlFor="password">Password:</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              {error && <p className="error-message">{error}</p>}
              <Link to="/admin"><button type="submit">Login</button></Link>
          </form>
      </div>
      </div></>
  );
};

export default AdminLog;
