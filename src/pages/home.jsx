import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const featuredServices = [
  { title: "Preventive Care" },
  { title: "Restorative Care" },
  { title: "Cosmetic Dentistry" },
  { title: "Pediatric Dentistry" },
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
          <Button as={Link} to="/contact" variant="warm" size="lg">
            Book An Appointment
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

        {/* Image placeholder */}
        <Row className="justify-content-center mt-4">
          <Col md={10}>
            <img
              src="https://placehold.co/1200x500?text=Office+Photo"
              alt="Our office"
              className="img-fluid rounded shadow-sm w-100"
            />
          </Col>
        </Row>
      </Container>

      {/* Services teaser */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {featuredServices.map((service, index) => (
            <Col md={3} sm={6} className="mb-4" key={index}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-0">{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-2">
          <Button as={Link} to="/services" variant="warm">
            View All Services
          </Button>
        </div>
      </Container>
    </>
  );
}
