// ErrorPage.js
import React from 'react';

const ErrorPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Oops! Something went wrong.</h1>
      <p style={{ fontSize: '24px' }}>Please try again later or contact support.</p>
    </div>
  );
};

export default ErrorPage;
