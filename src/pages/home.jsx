import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-4">Welcome to Our Dental Practice</h1>
        <p className="lead text-center">
          We are dedicated to providing you with the highest quality dental
          care.
        </p>
      </Container>
    </section>
  );
}
