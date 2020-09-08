import React from 'react';
import './nav.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {

        return (

            <Navbar expand="lg" fixed="top" className='customNav'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mr-auto customToggle' />
                <Navbar.Collapse id="responsive-navbar-nav" className='mr-auto customToggle'>
                    <Nav className="mr-auto" >
                        <Nav.Link href="/" className="navBarLink">Home</Nav.Link>
                        <Nav.Link href="resume" className="navBarLink">Resume</Nav.Link>
                        <Nav.Link href="//www.artstation.com/damianchavira" className="navBarLink">Art</Nav.Link>
                        <Nav.Link href="projects" className="navBarLink">Projects</Nav.Link>
                        <Nav.Link href="contact" className="navBarLink">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default NavigationBar;