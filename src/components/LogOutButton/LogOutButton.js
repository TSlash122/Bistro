import React from 'react';
import axios from 'axios';

const LogoutButton = ({ setIsLoggedIn }) => {
  const handleLogout = async () => {
    try {
      // Call the Express logout endpoint
      await axios.post('http://localhost:8085/logout', {}, { withCredentials: true });

      // Update global login state
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || 'Something went wrong!');
      
    }
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export default LogoutButton;
