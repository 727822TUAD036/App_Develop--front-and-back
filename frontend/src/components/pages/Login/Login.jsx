import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(data.username, data.password);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section>
      <div className="loginform-box">
        <div className="loginbackground-example">
          <div className="loginform-value">
            <form onSubmit={handleFormSubmit}>
              <h2>Login</h2>
              {error && <p className="error">{error}</p>}
              <div className="logininputbox">
                <input
                  type="email"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label>Email</label>
              </div>
              <div className="logininputbox">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <div className="loginforget">
                <label htmlFor="Rememberme">
                  <input type="checkbox" id="loginRememberme" />
                  Remember Me
                </label>
              </div>
              <button className="loginbutton" type="submit">
                Log in
              </button>
              <div className="loginregister">
                <p>Don't have an account? <Link to="/Signup">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="loginwelcome11">
        <p>Welcome To Your</p>
      </div>
      <div className="loginup2ndhome2">
        <p>Car's</p>
      </div>
      <div className="login2ndhome3">
        <p>Second Home!</p>
      </div>
    </section>
  );
}

export default Login;
