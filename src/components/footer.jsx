import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="mb-3">
          {/* Address & Phone */}
          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="text-uppercase mb-2">Contact</h6>
            <p className="mb-1">123 Main Street, Collinsville, IL 62234</p>
            <p className="mb-0">(618) 555-0123</p>
          </Col>

          {/* Page Links */}
          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="text-uppercase mb-2">Menu</h6>
            <Link
              to="/"
              className="d-block text-light text-decoration-none mb-1"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="d-block text-light text-decoration-none mb-1"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="d-block text-light text-decoration-none mb-1"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="d-block text-light text-decoration-none"
            >
              Contact
            </Link>
          </Col>

          {/* Social Icons */}
          <Col md={4}>
            <h6 className="text-uppercase mb-2">Follow Us</h6>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center border-top border-secondary pt-3">
            <small>
              &copy; {year} Ellis Family Dentistry. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
