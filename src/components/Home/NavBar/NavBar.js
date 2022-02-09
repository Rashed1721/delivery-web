import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from '../../../image/Photos and Icons/logo.png'


import { Button, Container, Form, FormControl, InputGroup, Modal, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const NavBar = () => {


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    return (
        <div>



            <div >


                <Modal show={show}>
                    <h1 style={{ textAlign: "center", padding: '20px' }}>Sign in</h1>

                    <Container>
                        <Form style={{ padding: "20px" }}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label><h6>Email  or phone Number</h6></Form.Label>
                                <Form.Control style={{ padding: '12px', border: '2px solid grey', borderRadius: '10px' }} type="email" placeholder="you@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label><h6>Password</h6></Form.Label>
                                <Form.Control style={{ padding: '12px', border: '2px solid grey', borderRadius: '10px' }} type="password" placeholder="Enter 6 charecter or more" />
                            </Form.Group>
                            <NavLink href="/passwordreset">  <h6 style={{ color: 'red' }}>ForgetPasword?</h6></NavLink>
                            <Form.Check type="checkbox" label="Rembember me" />

                            <Button style={{ width: '80%', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", margin: "20px", marginLeft: '40px' }}
                                onClick={handleClose}
                            >CONNEXION</Button>


                            <p style={{ textAlign: 'center' }}>Dont have a peace account?</p>
                            <h6 style={{ textAlign: 'center', marginTop: -10, paddingBottom: 10, color: "red " }}>Sign Up Here</h6>

                        </Form>
                    </Container>
                </Modal>
            </div>



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
                            <button onClick={handleShow} className='signIn'>Sign in</button>
                            <Nav.Link href="/login"><button className='signUp'> Sign Up <i class="fas fa-long-arrow-alt-right"></i></button></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );
};

export default NavBar;