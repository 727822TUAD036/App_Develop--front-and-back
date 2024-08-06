import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup({ onRegister }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isStrongPassword(password)) {
      alert('Please choose a stronger password. It should contain at least one lowercase letter, one uppercase letter, and one digit, and be at least 8 characters long.');
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const savedUser = await response.json();
        console.log('Sign-up successful:', savedUser);
        setSignupSuccess(true);
        navigate('/Login');
      } else {
        console.error('Sign-up failed:', response.statusText);
        alert('Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      alert('Sign-up error. Please try again.');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <section>
      <div className="signupbackground-example">
        <div className="signupform-value">
          <form onSubmit={handleFormSubmit}>
            <div className="signupcontainer">
              <h2>Sign up</h2>
              <div className="signupinputbox">
                <input
                  type="text"
                  id="signupfirstname"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="signupinputbox">
                <input
                  type="text"
                  id="signuplastname"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
              <div className="signupinputbox">
                <input
                  type="email"
                  id="signupemail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="signupinputbox">
                <input
                  type="password"
                  id="signuppassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="signupforget">
                <label htmlFor="Rememberme">
                  <input type="checkbox" id="signupRememberme" />
                  Remember Me <br />
                </label>
              </div>
              <button className="signuploginbutton11" type="submit">
                Sign Up
              </button>
              {signupSuccess && (
                <div className="signupredirect-link">
                  <Link to="/Login"><button className="signuploginbutton">Sign Up</button></Link>
                </div>
              )}
              <div className="signupregister">
                <p>
                  Already have an Account? <Link to="/Login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="signup2ndhome1">
        <p>Welcome To Your</p>
      </div>
      <div className="signup2ndhome2">
        <p>Car's</p>
      </div>
      <div className="signup2ndhome3">
        <p>Second Home!</p>
      </div>
    </section>
  );
}

Signup.defaultProps = {
  onRegister: () => {},
};

export default Signup;
