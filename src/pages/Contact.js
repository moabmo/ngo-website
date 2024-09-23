import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px;
  background-color: #002147;
  color: white;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  
  input, textarea {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #5F9EA0;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 30px;
  }
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Us</h2>
    <ContactForm>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows="4" />
      <button type="submit">Send Message</button>
    </ContactForm>
  </ContactContainer>
);

export default Contact;
