import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from '../../../image/Photos and Icons/logo.png'


import { Button, Col, Container, Form, FormControl, Modal, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const NavBar = () => {


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    return (
        <div>

            {/* modal */}

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



            <Navbar style={{ paddingTop: 0, paddingBottom: 0 }} bg="light" expand="lg">

                <Container style={{ margin: 'auto' }}>
                    <Navbar.Brand href="#home"><img src={logo} width='200px' height="100px" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >


                            <h3> <i style={{ color: '#0cce87', marginTop: 30, marginLeft: 100 }} class="fas fa-map-marker-alt"></i></h3>
                            <p style={{ fontSize: 22, marginLeft: 12, marginTop: 27, }}>Paris</p>

                            <h3><i style={{ marginLeft: 100, marginTop: 33 }} class="fas fa-caret-down"></i></h3>


                            <Form style={{ borderRight: '2px solid grey', height: '100px', width: '', }} className="d-flex">
                                <h3 style={{ backgroundColor: 'white', }}> <i style={{ color: '#0cce87', marginTop: 37, marginLeft: 25 }} class="fas fa-search"></i></h3>
                                <FormControl
                                    style={{ borderColor: 'transparent', width: '100%' }}
                                    type="search"
                                    placeholder="your company"
                                    className="me-2"
                                    aria-label="Search"
                                />

                            </Form>




                            <div style={{ display: "flex", alignItems: 'center', marginLeft: 30 }}>
                                <button style={{ width: 100, fontWeight: 700, height: '40px', borderRadius: 10 }} onClick={handleShow} className='signIn'>SIGN IN</button>
                                <Nav.Link href="/login"><button style={{ width: 100, fontWeight: 700, height: '40px', borderRadius: 10 }} className='signUp'>SIGN UP <i class="fas fa-long-arrow-alt-right"></i></button></Nav.Link>
                            </div>



                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>


        </div >
    );
};

export default NavBar;