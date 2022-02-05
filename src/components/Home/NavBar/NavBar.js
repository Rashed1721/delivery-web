import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from '../../../image/Photos and Icons/logo.png'

import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const NavBar = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container style={{ margin: 'auto' }}>
                    <Navbar.Brand href="#home"><img src={logo} width='100px' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >

                            <i style={{ color: '#0cce87', marginTop: 15, marginLeft: 100 }} class="fas fa-map-marker-alt"></i>
                            <NavDropdown style={{ paddingRight: 100 }} title="Paris" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Form className="d-flex">
                                <i style={{ color: '#0cce87', marginTop: 15 }} class="fas fa-search"></i>
                                <FormControl
                                    style={{ borderColor: 'transparent', width: '300px' }}
                                    type="search"
                                    placeholder="your company"
                                    className="me-2"
                                    aria-label="Search"
                                />

                            </Form>
                            <Nav.Link href="#home"><button className='signIn'>Sign in</button></Nav.Link>
                            <Nav.Link href="#link"><button className='signUp'> Sign Up <i class="fas fa-long-arrow-alt-right"></i></button></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavBar;