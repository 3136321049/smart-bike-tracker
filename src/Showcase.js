// Showcase.js

import React from 'react';
import bikeImage from './bike.png';

const Showcase = () => {
  return (
    <section id="showcase" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>See Bike Tracker in Action</h2>
        <img src={bikeImage} alt="Bike Tracker in action" style={styles.image} />
      </div>
    </section>
  );
}


const styles = {
  section: {
    padding: '50px 0',
    textAlign: 'center',
    backgroundColor: '#f8f8f8', // adjust color to match your branding
  },
  container: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '30px',
  },
};

export default Showcase;
