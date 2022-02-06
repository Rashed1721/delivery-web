import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const CreditCard = () => {
    return (
        <div>
            <Container>
                <div>
                    <Header></Header>
                    <h4 style={{ textAlign: 'left', marginBottom: '60px', marginTop: '40px' }}>S'INSCRIRE</h4>
                    <hr />
                    <h4 style={{ marginTop: '70px', fontWeight: '700' }}>Enter Your Credit Card below</h4>




                    <div style={{ width: '70%', margin: 'auto' }}>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label></Form.Label>
                            <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: '700' }}>CARD NUMBER</h6>
                            <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, marginTop: 20, marginBottom: 20, margin: '20px  auto' }} type="text" />



                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label><h6 style={{ fontWeight: 700 }}>Express</h6></Form.Label>
                                    <Form.Control style={{ height: " 60px", borderBottom: '2px solid grey', borderRight: '2px solid grey', borderLeft: '2px solid grey' }} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label><h6 style={{ fontWeight: 700 }}>CVV CODE</h6></Form.Label>
                                    <Form.Control style={{ height: " 60px", borderTop: '1px solid black', borderRight: '2px solid grey', borderLeft: '2px solid grey' }} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label><h6 style={{ fontWeight: 700 }}>ZIP CODE</h6></Form.Label>
                                    <Form.Control style={{ height: " 60px", borderBottom: '2px solid grey', borderRight: '2px solid grey', borderLeft: '2px solid grey' }} />
                                </Form.Group>
                            </Row>


                        </Form.Group>




                        <Button style={{ width: '40%', height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", marginTop: '20px', marginBottom: '100px' }}

                        ><h5>SAVE</h5></Button>

                    </div>



                    <hr />
                    <Footer></Footer>

                </div >
            </Container>
        </div>
    );
};

export default CreditCard;