import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Gp - Electro Automatic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About us</Nav.Link>
            <NavDropdown title="Pricing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sick</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Omron
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Something else
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">RODO</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;