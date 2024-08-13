import React, { useState, useEffect } from 'react';
import './Members.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users'); // Replace with your API URL
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        } else {
          console.error('Failed to fetch members:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const handleRemove = (id) => {
    setMembers(members.filter(member => member.id !== id));

    // Optionally, make an API call to delete the member on the server
    // fetch(`http://localhost:8080/api/users/${id}`, { method: 'DELETE' })
    //   .then(response => {
    //     if (response.ok) {
    //       console.log('Member removed successfully');
    //     } else {
    //       console.error('Failed to remove member:', response.statusText);
    //     }
    //   })
    //   .catch(error => console.error('Error removing member:', error));
  };

  return (
    <div className="members-container">
      <header className="header">
        <h1>Members List</h1>
      </header>

      <div className="main-content">
        <div className="members-list">
          <table className="members-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.id}>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.email}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => handleRemove(member.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
