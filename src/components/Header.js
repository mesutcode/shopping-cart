import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
function Header() {
  return (
    <section>
      <Navbar bg="dark " expand="lg">
        <Container className="mb-3 align-content-center">
          <Navbar.Brand href="#home" className="text-warning">
            Basket
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-warning">
              <Nav.Link href="#home" className="text-warning">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-warning">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
