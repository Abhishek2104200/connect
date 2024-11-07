// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import PostContent from './PostContent';
import SearchJobs from './SearchJobs';

const App = () => {
  return (
    <Router>
      <div style={navBarStyle}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
        <Link to="/signup" style={navLinkStyle}>Signup</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post-content" element={<PostContent />} />
        <Route path="/search-jobs" element={<SearchJobs />} />
      </Routes>
    </Router>
  );
};

const navBarStyle = {
  display: 'flex',
  gap: '15px',
  padding: '20px',
  backgroundColor: '#0073b1',
  color: 'white',
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default App;
