import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const PhoneNumber = () => {
    return (
        <div>
            <Container>
                <div>
                    <Header></Header>
                    <h4 style={{ textAlign: 'left', marginBottom: '60px', marginTop: '40px' }}>SIGN UP</h4>
                    <hr />
                    <h4 style={{ marginTop: '70px', fontWeight: '700' }}>Validate Your Phone Number</h4>
                    <p>To Varivey your number please provide us your validation code</p>



                    <div style={{ width: '45%', margin: 'auto' }}>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label></Form.Label>

                            <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, marginTop: 20, marginBottom: 20, margin: '20px  auto' }} type="text" />
                        </Form.Group>

                        <h6 style={{ color: "#0cce87", borderBottom: '2px solid #0cce87', display: 'inline-block' }}>RESEND  VALIDATION CODE</h6><br />


                        <Button style={{ width: '50%', height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", marginTop: '20px', marginBottom: '30px' }}

                        ><h5>CONTINUE</h5></Button>

                    </div>



                    <hr />
                    <Footer></Footer>

                </div >
            </Container>
        </div>
    );
};

export default PhoneNumber;