import { Button, Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="lead text-center">
          Have questions or want to schedule an appointment? Reach out to us!
        </p>

        {/*  Contact Form */}
        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          <Row className="mb-3">
            <Col md={6}>
              <label htmlFor="first name" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="first name"
                placeholder="Enter your first name"
              />
            </Col>
            <Col md={6}>
              <label htmlFor="last name" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="last name"
                placeholder="Enter your last name"
              />
            </Col>
          </Row>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <Button type="submit" variant="warm">
            Submit
          </Button>
        </form>

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
