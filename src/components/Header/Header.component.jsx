import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav justify-content-between">
          <Nav className="me-auto d-flex align-items-center ">
            <Nav.Link href="/">{t("menu-home")}</Nav.Link>
            <Nav.Link href="#about-me">{t("menu-aboutme")}</Nav.Link>
            <Nav.Link href="#projects">{t("menu-projects")}</Nav.Link>

            <NavDropdown
              className="d-lg-none"
              title="Language"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">RU</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-none d-lg-block">
            <NavDropdown className="" title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="/en">EN</NavDropdown.Item>
              <NavDropdown.Item href="/es">ES</NavDropdown.Item>
              <NavDropdown.Item href="/ru">RU</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
