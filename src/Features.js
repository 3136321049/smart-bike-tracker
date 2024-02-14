// Features.js

import React from 'react';

const Features = () => {
  return (
    <section id="features" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Key Features</h2>
        <div style={styles.feature}>
          <h3 style={styles.subheading}>Theft Detection</h3>
          <p style={styles.text}>Get notified instantly if your bike experiences suspicious activity.</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.subheading}>GPS Tracking</h3>
          <p style={styles.text}>Track your bike's location in real-time using GPS technology.</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.subheading}>Customizable Alerts</h3>
          <p style={styles.text}>Set up personalized alerts for different behaviors and locations.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#f5f5f5',
  },
  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 1rem',
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  feature: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
  },
  featureHeading: {
    fontSize: '1.75rem',
    color: '#333',
    marginBottom: '1rem',
  },
  featureText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
  },
};


export default Features;
