import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Homepage() {
  return (
    <Navbar className="bg-body-tertiary" bg="light" expand="lg" sticky="top" style={{backgroundColor: "#fefeff"}}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./djanLogo.png"
            width="90"
            className="d-inline-block align-text-top"
            alt="Djan Logo"
          />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="#about">About US</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#catalogue">Catalogue</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Homepage;
