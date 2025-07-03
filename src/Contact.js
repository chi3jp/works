
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Your message" />
        </Form.Group>

        <Button style={{ backgroundColor: '#6A0DAD', borderColor: '#6A0DAD' }} type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
