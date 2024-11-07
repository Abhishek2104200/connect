import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={homeContainerStyle}>
      <h2 style={headerStyle}>Welcome to the Job Portal</h2>
      <div style={buttonSectionStyle}>
        <Link to="/post-content" style={linkStyle}>
          <button style={featureButtonStyle}>Post Content</button>
        </Link>
        <Link to="/search-jobs" style={linkStyle}>
          <button style={featureButtonStyle}>Search Jobs</button>
        </Link>
      </div>
    </div>
  );
};

const homeContainerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '40px',
  maxWidth: '800px',
  margin: '0 auto',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: '32px',
  marginBottom: '40px',
};

const buttonSectionStyle = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '40px',
};

const featureButtonStyle = {
  padding: '20px 40px',
  backgroundColor: '#0073b1',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  cursor: 'pointer',
  minWidth: '200px',
};

const linkStyle = {
  textDecoration: 'none',
};

export default Home;
