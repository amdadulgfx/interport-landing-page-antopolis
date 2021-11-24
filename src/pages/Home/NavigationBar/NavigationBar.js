import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { logo } from '../../../images/logo';
import './NavigationBar.css'
const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container >
                <Navbar.Brand href="#home">{logo}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#enroll">Enroll For Course</Nav.Link>
                        <Nav.Link href="#trainers">Meet Your Trainers</Nav.Link>
                    </Nav>
                    <Nav>
                        <button className='primary-btn-interport'>Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;