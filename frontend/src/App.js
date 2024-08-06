import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Welcome from './components/pages/Welcome/Welcome';
import Home from './components/pages/Home/Home';
import Faqs from './components/pages/Faqs/Faqs';
import Service from './components/pages/Service/Service';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Periodic from './components/pages/Periodic/Periodic';
import Diagnostics from './components/pages/Diagnostics/Diagnostics';
import Body from './components/pages/Body/Body';
import Booking from './components/pages/Booking/Booking';
import Admin from './components/pages/Admin/Admin';
import Common from './components/pages/Common/Common';
import Oil from './components/pages/Oil/Oil';
import Break from './components/pages/Break/Break';
import Adminlog from './components/pages/Adminlog/Adminlog';


import './App.css';

function App() {
  const handleLogin = (username, password) => {
    console.log(`Logged in with: ${username}`);
  };

  const handleRegister = (firstName, lastName, email, password) => {
    console.log(`Registered with: ${firstName} ${lastName}, ${email}`);
  };

  return (
    <Router>
      <div className="App">
        <header>
          {/* Header content can be added here */}
        </header>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Signup onRegister={handleRegister} />} />
          <Route path="/welcome" element={<Welcome />} />
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/periodic" element={<Periodic />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/body" element={<Body />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/common" element={<Common />} />
          <Route path="/oil" element={<Oil />} />
          <Route path="/break" element={<Break />} />
          <Route path="/adminlog" element={<Adminlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
