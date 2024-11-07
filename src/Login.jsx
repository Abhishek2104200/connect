import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      navigate('/home'); // Redirect to Home page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={loginContainerStyle}>
      <h2 style={headerStyle}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
      <p style={footerStyle}>Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

const loginContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
  padding: '20px',
  maxWidth: '400px',
  margin: '0 auto',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor: '#ffffff',
};

const headerStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#0073b1',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '15px',
  width: '100%',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '15px 30px',
  backgroundColor: '#0073b1',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '15px',
};

const footerStyle = {
  fontSize: '14px',
  marginTop: '15px',
  color: '#555',
};

export default Login;
