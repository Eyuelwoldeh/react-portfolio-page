import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.intro}>
        I'd love to hear from you! Whether it's a question, an opportunity, or just a chat, feel free to reach out.
      </p>
      <div style={styles.contactLinks}>
        <a
          href="mailto:woldeh1@stolaf.edu"
          style={styles.link}
          aria-label="Send me an email"
        >
          <FaEnvelope style={styles.icon} />
          woldeh1@stolaf.edu
        </a>
        <a
          href="https://linkedin.com/in/woldehanna"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin style={styles.icon} />
          linkedin.com/in/woldehanna
        </a>
        <a
          href="https://github.com/Eyuelwoldeh"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="Visit my GitHub profile"
        >
          <FaGithub style={styles.icon} />
          github.com/woldehanna
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#131313',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#f9f9f9',
  },
  intro: {
    fontSize: '1.2rem',
    color: '#f9f9f9',
    marginBottom: '30px',
  },
  contactLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    color: '#0077b5',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'color 0.3s',
  },
  icon: {
    fontSize: '1.5rem',
  },
};

export default Contact;
