import { Container, Row, Col, Card } from "react-bootstrap";

const team = [
  { name: "Dr. Amanda Ellis", role: "General Dentist" },
  { name: "Brynli Pitt", role: "Office Manager" },
  { name: "Aurora Aussie", role: "Dental Hygienist" },
  { name: "Evy Puggle", role: "Dental Assistant" },
];

export default function About() {
  return (
    <Container className="py-5">
      {/* Intro */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Our Practice</h1>
        <p className="text-muted lead">
          Dedicated to comfortable, whole-health dental care for the whole
          family.
        </p>
      </div>

      {/* Meet the Team */}
      <h2 className="text-center mb-4">Meet the Team</h2>
      <Row>
        {team.map((member, index) => (
          <Col md={3} sm={6} className="mb-4" key={index}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Img
                variant="top"
                src="https://placehold.co/300x300?text=Photo"
                alt={member.name}
              />
              <Card.Body>
                <Card.Title className="mb-1">{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
