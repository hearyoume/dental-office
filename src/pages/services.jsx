import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Preventive Care",
    text: "Routine cleanings, exams, and X-rays to catch issues early and keep your smile healthy for the long run.",
  },
  {
    title: "Restorative Care",
    text: "Fillings, crowns, and bridges to repair damage and restore your teeth to full strength and function.",
  },
  {
    title: "Cosmetic Dentistry",
    text: "Whitening, veneers, and bonding to help you feel confident every time you smile.",
  },
  {
    title: "Pediatric Dentistry",
    text: "Gentle, patient care designed to make dental visits comfortable for our youngest patients.",
  },
  {
    title: "Root Canal Therapy",
    text: "Relieving pain and saving damaged teeth with modern, comfortable endodontic treatment.",
  },
  {
    title: "Emergency Care",
    text: "Same-day appointments for unexpected pain, injuries, or dental emergencies.",
  },
];

export default function Services() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Services</h1>
        <p className="text-muted lead">
          Comprehensive dental care for every stage of life, all under one roof.
        </p>
      </div>

      <Row>
        {services.map((service, index) => (
          <Col md={4} sm={6} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
