import { Alert, Button, Container, Form } from "react-bootstrap";

import useContactForm from "../hooks/use-contact-form";

export default function Contact() {
  const { formData, errors, submitted, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="lead text-center">
          Have questions or want to schedule an appointment? Reach out to us!
        </p>

        <Form
          className="mx-auto"
          style={{ maxWidth: "600px" }}
          noValidate
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
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
