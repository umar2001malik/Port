import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="mb-4">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Portfolio on left side */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="order-1"
          >
            <Navbar.Brand href="#home" className=' font-bold '>MY_Portfolio</Navbar.Brand>
          </motion.div>

          {/* Toggle button for small screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-3 ms-auto">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          {/* Nav links on right side */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="order-2 order-lg-3 w-100 w-lg-auto"
          >
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ms-auto font-bold">
                <Nav.Link href="#Home" className="px-4">Home</Nav.Link>
                <Nav.Link href="#About" className="px-4">About</Nav.Link>
                <Nav.Link href="#Experinace" className="px-4">Experience</Nav.Link>
                <Nav.Link href="#Contact" className="px-4">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </motion.div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
