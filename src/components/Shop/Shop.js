import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import MainNavbar from '../MainNavbar/MainNavbar';

const Shop = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div style={{ display: 'flex', justifyContent: 'space-around', border: '2px solid grey', marginTop: 50 }}>
                <div style={{ padding: '20px', width: '50%' }} >
                    <h1 style={{ fontWeight: 400 }}>February 2nd January</h1>
                    <p style={{ color: 'lightgreen', fontSize: 30 }}>Order Before 10.00am</p>
                </div>

                <div style={{ padding: '20px', borderLeft: '2px solid grey', width: '50%', }}>
                    <h1>Your pickup Location</h1>
                    <h5 style={{ color: 'green', fontWeight: 800 }}>Face Foundation | 10505 Sorrento Valley Rd (Suite 175)</h5>
                </div>
            </div>


            <Container style={{ marginTop: 60 }}>
                <h2 style={{ marginTop: 40, textAlign: "left", fontWeight: 700, borderBottom: "2px solid grey", paddingBottom: 20 }}>Sandiago Burger</h2>

                <div>
                    <Row>
                        <Col style={{ marginBottom: '50px' }} md={4} sm={6}>
                            <div>
                                <div style={{ height: 200, backgroundColor: "black" }}>

                                </div>

                                <div style={{ display: 'flex', marginTop: 15, justifyContent: "space-between" }}>
                                    <div style={{ width: 100, height: 40, backgroundColor: 'orange' }}>
                                        <h3 style={{ color: 'white' }}>MEAT</h3>
                                    </div>
                                    <div>
                                        <h4>Cheeseburger W/ Chips</h4>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
                                    <div style={{ textAlign: 'left', width: '45%' }}>
                                        <h2>$11.99</h2>
                                        <h5 style={{ color: 'grey' }}>+$2 delivery + tax</h5>
                                    </div>
                                    <div style={{ display: 'flex', border: '2px solid grey', width: '50%', borderRadius: 9 }}>
                                        <div>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Select style={{ borderRight: '2px solid grey', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} defaultValue="Choose...">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div style={{ margin: 'auto' }}>
                                            <button style={{ backgroundColor: "transparent", border: 'transparent' }}>order</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div >
    );
};

export default Shop;