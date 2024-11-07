import React, { useState } from 'react';

const SearchJobs = () => {
  const [search, setSearch] = useState('');
  const [jobResults, setJobResults] = useState([]);

  const handleSearch = () => {
    if (search.trim()) {
      setJobResults(['Job 1: Developer', 'Job 2: Designer', 'Job 3: Project Manager']);
    } else {
      setJobResults([]);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Search Jobs</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
        placeholder="Search for jobs..."
      />
      <button onClick={handleSearch} style={buttonStyle}>Search</button>
      {jobResults.length > 0 && (
        <ul style={jobListStyle}>
          {jobResults.map((job, index) => (
            <li key={index} style={jobItemStyle}>{job}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const containerStyle = {
  padding: '40px',
  maxWidth: '600px',
  margin: '0 auto',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  textAlign: 'center',
  color: '#0073b1',
  fontSize: '28px',
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '16px',
  marginBottom: '15px',
};

const buttonStyle = {
  padding: '15px 25px',
  backgroundColor: '#0073b1',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

const jobListStyle = {
  marginTop: '20px',
  listStyleType: 'none',
  padding: '0',
};

const jobItemStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  marginBottom: '10px',
  backgroundColor: '#f0f0f0',
};

export default SearchJobs;
