import React from 'react';

const Contact = () => {
  return (
    <section id="contact" >
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>For more information about our products and to order, visit our website or contact us directly:</p>
        <p style={styles.text}>Call us at: <a href="tel:+447925709867" style={styles.link}>07925 709867</a></p>
        <p style={styles.text}>Or to have a look at our user interface app if you already have our product:</p>
        <a href="https://smart-bike-tracker-4a212832448d.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>Visit Our Website</a>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send</button>
        </form>
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
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    fontSize: '1rem',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    fontSize: '1rem',
    padding: '1rem',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};


export default Contact;
