import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    console.log(process.env.REACT_APP_EMAILJS_USER_ID);
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams, // params
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending message:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" style={styles.section}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.intro}>
        I'd love to hear from you! Whether it's a question, an opportunity, or just a chat, feel free to reach out.
      </p>
      
      {/* Contact Links */}
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
      
      {/* Contact Form */}
      <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" style={styles.input} required />

        <label htmlFor="email" style={styles.label}>Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" style={styles.input} required />

        <label htmlFor="message" style={styles.label}>Message:</label>
        <textarea id="message" name="message" placeholder="Your message" style={styles.textarea} rows="5" required></textarea>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
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
  form: {
    marginTop: '30px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0077b5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  buttonHover: {
    backgroundColor: '#005fa3',
  },
};

export default Contact;