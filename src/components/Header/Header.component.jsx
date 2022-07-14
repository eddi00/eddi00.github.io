import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation('common');
  return (
    <Navbar bg="light" expand="lg" className="fixed-top" id="EpicNavbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav my-5" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-between my-5">
          <Nav className="me-auto d-flex align-items-center ">
            <Nav.Link href="#home">{t("menu-home")}</Nav.Link>
            <Nav.Link href="#about-me">{t("menu-aboutme")}</Nav.Link>
            <Nav.Link href="#projects">{t("menu-projects")}</Nav.Link>
            <Nav.Link href="#skills">{t("menu-skills")}</Nav.Link>
            <Nav.Link href="#contact">{t("menu-contact")}</Nav.Link>

            {/* <NavDropdown
              className="d-lg-none"
              title="Language"
              id="basic-nav-dropdown"
            > */}
              {/* <NavDropdown.Item href="/en">English</NavDropdown.Item>
              <NavDropdown.Item href="/es">Español</NavDropdown.Item>
              <NavDropdown.Item href="/ru">Русский</NavDropdown.Item> */}
            {/* </NavDropdown> */}
              <Nav.Link href="/en" className="d-block d-lg-none">English</Nav.Link>
              <Nav.Link href="/es" className="d-block d-lg-none">Español</Nav.Link>
              <Nav.Link href="/ru" className="d-block d-lg-none">Русский</Nav.Link>
          </Nav>
          <div className="d-none d-lg-block">
            <NavDropdown className="" title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="/en">English</NavDropdown.Item>
              <NavDropdown.Item href="/es">Español</NavDropdown.Item>
              <NavDropdown.Item href="/ru">Русский</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
