import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { GiEyelashes } from "react-icons/gi";
const NavigationBar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state
  // const navigate = useNavigate();

  // const handleUserIconClick = () => {
  //   if (isLoggedIn) {
  //     navigate('/account');
  //   } else {
  //     navigate('/login');
  //   }
  // };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Hine <GiEyelashes /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Dịch Vụ" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/eyelash">Nối Mi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nail">Nails</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/booking">Đặt Lịch</Nav.Link>
            <Nav.Link as={Link} to="/promotions">Khuyến Mãi</Nav.Link>
            <Nav.Link as={Link} to="/login"><FaUserCircle size={24} /></Nav.Link>
            {/* <Nav.Link onClick={handleUserIconClick}>
              <i className="bi bi-person-circle"></i>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
