import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontFamily: "'Arial', sans-serif",
  };

  const navItemStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '16px',
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>CONNECT</div>
      <div>
        <Link to="/home" style={navItemStyle}>
          Home
        </Link>
        <Link to="/" style={navItemStyle}>
          Login
        </Link>
        <Link to="/signup" style={navItemStyle}>
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
