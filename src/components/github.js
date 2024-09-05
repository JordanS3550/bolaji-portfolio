// src/components/GitHubLink.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function GitHubLink() {
  return (
    <a
      href="https://github.com/bj985/jibol"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#333',
        textDecoration: 'none',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        fontSize:'10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  );
}

export default GitHubLink;
