import React, { useState } from 'react';

const PostContent = () => {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      alert('Content posted!');
      setContent('');
    } else {
      alert('Please enter some content.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Post Content</h2>
      <textarea
        placeholder="Write something here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={textareaStyle}
      />
      <button onClick={handlePost} style={buttonStyle}>Post</button>
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

const textareaStyle = {
  width: '100%',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '16px',
  resize: 'vertical',
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

export default PostContent;
