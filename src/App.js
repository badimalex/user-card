import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import phone from './phone.png';
import email from './email.png';
import Modal from './Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000?term=${searchTerm}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error retrieving the users data:', error);
      });
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <div className="search-icon"></div>
      </div>

      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.email}>
            <h2 onClick={() => handleCardClick(user)}>{user.name}</h2>
            <div className="card-content">
              <div className="item">
                <img src={phone} alt="Телефон" />
                <p>{user.phone}</p>
              </div>
              <div className="item">
                <img src={email} alt="Email" />
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
        {selectedUser && (
          <Modal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default App;
