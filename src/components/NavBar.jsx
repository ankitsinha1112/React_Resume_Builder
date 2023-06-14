import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <a href="/" className="text-decoration-none text-black">Resume Builder</a>
        </Navbar.Brand>
        <Nav className="me-auto">
          <a href="/create" className="mx-2 text-decoration-none text-black">Create New Resume</a>
          {/* <NavLink to="#" className="mx-2 text-decoration-none text-black">About</NavLink> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
