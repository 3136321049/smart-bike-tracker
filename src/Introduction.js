import React from 'react';
import bikeImage from './bike.png';
import signImage from './sign.png';
import bikeVideo from './market.mp4'; // Import your video file here

const Introduction = () => {
  return (
    <section id="product-introduction" style={styles.introSection}>
      <div style={styles.signContainer}>
        <img src={signImage} alt="Sign Logo" style={styles.signLogo} />
        <div style={styles.signText}>Welcome to Smart Bike Tracker</div>
      </div>
      <div style={styles.container}>
        <h1 style={styles.heading}>"Ride into the Future with Smart Bike Tracker"</h1>
        <p style={styles.introText}>
          In a world that never stops, your peace of mind is on the move with you. Introducing the Smart Bike Tracker, the next evolution in bicycle security.
        </p>
        <h2 style={styles.introductionHeading}>Introduction</h2>
        <p style={styles.introText}>
          Every day, students and faculty members face a common concern: the theft of bikes is everywhere, and the security 
          of their bicycles is not ensured. The Smart Bike Tracker is here to address that concern. With our state-of-the-art 
          device, you can rest assured that your bike is always secure. Equipped with advanced theft detection sensors 
          and real-time GPS tracking, all powered by an efficient solar board, the Smart Bike Tracker is your bike's 
          guardian angel. Whether you're in class, at home, or on the go, stay connected to your bike and enjoy peace of mind.
        </p>
        <img src={bikeImage} alt="Smart Bike Tracker Prototype" style={styles.prototypeImage} />
        <div style={styles.videoContainer}>
          {/* Video element for the local video file */}
          <video style={styles.video} controls>
            <source src={bikeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}





// Adjusted styles object to resolve overlap
const styles = {
  introSection: {
    padding: '50px 0',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    position: 'relative', // For absolute positioning of the sign
  },
  container: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 20px',
    paddingTop: '140px', // Adjusted top padding to make space for the sign
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  prototypeImage: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '30px',
  },
  videoContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  video: {
    width: '100%',
    maxWidth: '800px',
  },
  signContainer: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px',
    backgroundColor: '#fff',
  },
  signText: {
    fontSize: '0.75em',
  },
  signLogo: {
    height: '200px', 
    width: 'auto', 
    padding: "5px",
  },
};

export default Introduction;

