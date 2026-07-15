import { Button, Card, Col, Container, Row } from "react-bootstrap";

const services = [
  {
    title: "Preventive Care",
    text: "Routine cleanings, exams, and checkups to keep your smile healthy.",
  },
  {
    title: "Restorative Care",
    text: "Fillings, crowns, and repairs to restore your teeth to full function.",
  },
  {
    title: "Cosmetic Dentistry",
    text: "Whitening, veneers, and smile makeovers tailored to you.",
  },
  {
    title: "Pediatric Dentistry",
    text: "Gentle, friendly care designed for our youngest patients.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Your Smile, Our Priority</h1>
          <p className="lead text-muted mb-4">
            Comfortable, modern dental care for the whole family.
          </p>
          <Button variant="warm" size="lg" href="/contact">
            Call to Schedule
          </Button>
        </Container>
      </div>

      {/* Welcome / Mission */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={8} className="mx-auto text-center">
            <h2 className="mb-3">Welcome to Our Office</h2>
            <p className="text-muted">
              We're committed to providing exceptional dental care in a warm,
              welcoming environment. Our team takes the time to listen to your
              concerns and build a treatment plan that fits your needs, your
              schedule, and your comfort level — because a trip to the dentist
              shouldn't be something you dread.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Services */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={3} sm={6} className="mb-4" key={index}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
