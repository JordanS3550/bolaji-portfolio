// src/components/LinkedInLink.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function LinkedInLink() {
  return (
    <a
      href="http://www.linkedin.com/in/ajibola-bolaji-96205125b"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#0077B5',
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
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  );
}

export default LinkedInLink;
