import { Alert, Button, Container, Form } from "react-bootstrap";

import useContactForm from "../hooks/use-contact-form";

export default function Contact() {
  const { submitted, handleSubmit } = useContactForm();

  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="lead text-center">
          Have questions or want to schedule an appointment? Reach out to us!
        </p>

        {/*  Contact Form */}
        <Form
          className="mx-auto"
          style={{ maxWidth: "600px" }}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button type="submit" variant="warm">
            Submit
          </Button>

          {submitted && (
            <Alert variant="success" className="mt-3">
              Thanks for reaching out! We'll get back to you soon.
            </Alert>
          )}
        </Form>

        {/*  Hours of Operation separated by a line */}
        <hr className="my-5" />
        <div className="text-center">
          <h2>Hours of Operation</h2>
          <ul className="list-unstyled">
            <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
