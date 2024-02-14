import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Why Choose Smart Bike Tracker?</h1>
        <div style={styles.featureList}>
          <div style={styles.featureItem}>
            <h3 style={styles.subheading}>Eco-Friendly Innovation</h3>
            <p style={styles.paragraph}>
              Our solar-powered technology ensures your bike protection system is always charged without draining resources, reducing your carbon footprint.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.subheading}>Cost-Efficient Security</h3>
            <p style={styles.paragraph}>
              Investing in Smart Bike Tracker means lifelong savings on replacement bikes and locks, not to mention the priceless peace of mind.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.subheading}>Uncompromised Robustness</h3>
            <p style={styles.paragraph}>
              Built to withstand the rigors of daily use, our tracker is as resilient as it is vigilant, ensuring your bike's safety in all conditions.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.subheading}>Compact and Concealed</h3>
            <p style={styles.paragraph}>
              The discreet design of our tracker means it's practically invisible to potential thieves, all while taking up minimal space on your bike.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.subheading}>Reliable Performance</h3>
            <p style={styles.paragraph}>
              Reliability is our top priority. Our tracker delivers consistent, accurate location tracking and immediate alerts when it matters most.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.subheading}>Long-Term Lifecycle</h3>
            <p style={styles.paragraph}>
              Designed for durability, the Smart Bike Tracker is a long-term investment, with easy updates and a build that's made to last.
            </p>
          </div>
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
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  featureItem: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    fontSize: '1.75rem',
    color: '#333',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
  },
};

export default WhyChooseUs;
