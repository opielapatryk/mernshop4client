import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
import polish from './images/polish.png'
import english from './images/english.png'
import {Link} from 'react-router-dom'
function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand><img
              src={logo}
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link><Link to="/" style={{textDecoration:"none", color:"gray"}}>Contact</Link></Nav.Link>
            <Nav.Link><Link to="/products" style={{textDecoration:"none", color:"gray"}}>Products</Link></Nav.Link>
            <Nav.Link><Link to="/rodo" style={{textDecoration:"none", color:"gray"}}>GDPR</Link></Nav.Link>
            <Nav.Link><Link to="/aboutus" style={{textDecoration:"none", color:"gray"}}>About us</Link></Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#"><img src={english} alt="eng" width="auto" height={"30"}/></NavDropdown.Item>
              <NavDropdown.Item href="#"><img src={polish} alt="pl" width="auto" height={"30"}/></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;