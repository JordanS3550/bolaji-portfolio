// src/components/InstagramLink.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importing specific icon

function InstagramLink() {
  return (
    <a
    // className='icon'
      href="https://www.instagram.com/clintonxx3/"
      target="_blank" // Corrected to open the link in a new tab
      rel="noopener noreferrer" // Security measure
      style={{ color:'#0077B5',
        textDecoration: 'none',
        // position:'absolute',
        // left:'820px',
        // bottom:'1px', 
         padding: '10px',
        fontSize:'10px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s',}}
       onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
    
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
  );
}

export default InstagramLink;
