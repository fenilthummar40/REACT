import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Section3() {
  return (
    <div class="container">
    <div className='c-1'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><span className='c-2'>NEW</span> <span className='c-3'>PRODUCT</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" c-4 me-auto">
            <Nav.Link href="#home">All</Nav.Link>
            <Nav.Link href="#link">Women's</Nav.Link>
            <Nav.Link href="#link">Men's</Nav.Link>
            <Nav.Link href="#link">Kide's</Nav.Link>
            <Nav.Link href="#link"> Accessories</Nav.Link>
            <Nav.Link href="#link"> Cosmetics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    </div>
  )
}

export default Section3