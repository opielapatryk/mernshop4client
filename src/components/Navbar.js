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
import { useTranslation } from 'react-i18next';

function AppNavbar() {
  const {t,i18n} = useTranslation()
  const handleChangeLang = (lng)=>{
    i18n.changeLanguage(lng)
    localStorage.setItem("lng",lng)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
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
              placeholder={t("Search")}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">{t("Search")}</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link><Link to="/" style={{textDecoration:"none", color:"gray"}}>{t("Contact")}</Link></Nav.Link>
            <Nav.Link><Link to="/products" style={{textDecoration:"none", color:"gray"}}>{t("Products")}</Link></Nav.Link>
            <Nav.Link><Link to="/rodo" style={{textDecoration:"none", color:"gray"}}>{t("GDPR")}</Link></Nav.Link>
            <Nav.Link><Link to="/aboutus" style={{textDecoration:"none", color:"gray"}}>{t("About us")}</Link></Nav.Link>
            <NavDropdown align="end" title={<span className="text-dark">{t("Language")}</span>} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>handleChangeLang("en")}><img src={english} alt="eng" width="auto" height={"30"}/></NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleChangeLang("pl")}><img src={polish} alt="pl" width="auto" height={"30"}/></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavbar;