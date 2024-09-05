// src/components/TwitterLink.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function TwitterLink() {
  return (
    <a
      href="https://x.com/Clinton46600363"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#1DA1F2',
        textDecoration: 'none',
        padding: '10px',
        // position: 'absolute',
        //  bottom: '300px', 
        //  left: '330px',
         backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontSize:'10px',
        
        cursor: 'pointer',
        transition: 'transform 0.3s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  );
}

export default TwitterLink;
