import { Container, Nav, Navbar, Image } from "react-bootstrap";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
              src={
                "https://media.licdn.com/dms/image/D4D03AQHR27ceRVMDGg/profile-displayphoto-shrink_800_800/0/1716309891331?e=1721865600&v=beta&t=u4Ewgr2hKY-lOpwm6XaHvINhwSzZ8UDxmSZMBv44OuE"
              }
              height="40"
              className="d-inline-block align-top"
            ></Image>{" "}
            <span className="ms-2">Bruno Gabriel Bazan</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
