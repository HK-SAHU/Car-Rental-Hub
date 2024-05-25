import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalComponent.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: '99999999999',
  },
};

const ModalComponent = ({ modalIsOpen, closeModal, isLogin, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const credentials = { email, password };

    if (isLogin) {
      const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
      if (
        storedCredentials &&
        storedCredentials.email === credentials.email &&
        storedCredentials.password === credentials.password
      ) {
        alert('Logged in successfully');
        onAuthSuccess(true); // Indicate successful authentication
      } else {
        alert('Wrong credentials');
      }
    } else {
      localStorage.setItem('credentials', JSON.stringify(credentials));
      alert('Registered successfully');
    }

    // Clear form and close modal
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Authentication Modal"
    >
      <button
        onClick={closeModal}
        style={{
          float: 'right',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: '99999999999',
        }}
      >
        &times;
      </button>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>  
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
    </Modal>
  );
};

export default ModalComponent;


