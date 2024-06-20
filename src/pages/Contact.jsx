import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Anuktha',  
      from_name: name,  
      from_email: email,  
      from_phone: phone,  
      message: message 
    };

    emailjs.send(
     'service_1rvcdpm',     
  'template_mxute9e',    
  templateParams,
  'yDMPxP6FboZcs8owM'         
    )
    .then(response => {
      console.log('Email sent successfully:', response.status, response.text);

      // Clear the form fields
      setEmail('');
      setName('');
      setPhone('');
      setMessage('');

      // Show success message for 2 seconds
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <div className="contact">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Send Email
          </Button>
        </Form>

        {showSuccess && (
          <p className="success-message text-center mt-3">
            Your message has been sent successfully!
          </p>
        )}

        <p className="contact-number text-center mt-4">Contact Number: 8921451177</p>
        <p className="contact-number text-center mt-4">Email:anukthavr@gmail.com</p>

      </Container>
    </div>
  );
};

export default Contact;
