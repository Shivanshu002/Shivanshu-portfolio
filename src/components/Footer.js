// Importing React for building the Footer component
import React from 'react';

// Footer Component - Displays footer information
const Footer = () => {
  return (
    // Footer wrapper with background and padding
    <footer className='bg-gray-100 py-4 relative'>
      {/* Centered container for the footer content */}
      <div className='container mx-auto px-4 text-center'>
        {/* Footer text with copyright information */}
        <p>&copy; 2024 Rohit Singh. All rights reserved</p>
      </div>
    </footer>
  );
};

// Exporting the Footer Component
export default Footer;
