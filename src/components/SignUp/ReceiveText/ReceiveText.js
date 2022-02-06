import React from 'react';
import { Button, Container, Form, } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const ReceiveText = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <h4 style={{ textAlign: 'left', marginBottom: '60px', marginTop: '40px' }}>SIGN UP</h4>
                <hr />
                <div style={{ width: '60%', margin: 'auto' }}>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label></Form.Label>
                        <h4 style={{ fontWeight: 700, marginTop: 40 }}>ENTER YOUR PHONE NUMBER</h4>
                        <p>we use your number to send notification</p>
                        <Form.Control style={{ padding: '12px', border: '2px solid grey' }} type="text" />


                        <Form.Label style={{ marginTop: '50px', fontWeight: 700 }}><h3>when would you like to receive texts?</h3></Form.Label>
                        <Form.Select style={{ marginTop: '30px', width: '30%', margin: ' 30px auto', height: 50 }} defaultValue="9.00 AM">
                            <option>9.00 AM</option>
                            <option>10.00 AM</option>
                            <option>11.00 AM</option>
                        </Form.Select>
                        <Form.Check type="checkbox" label="Rewind me 15 minutes beforecutoff time if i go to order" />
                    </Form.Group>

                    <h3 style={{ marginBottom: '30px', marginTop: '40px', fontWeight: 700 }}>Choose Order Options</h3>


                    <div style={{ height: 55, width: "100%", border: '2px solid grey', borderRadius: 10 }}>

                        <>

                            <div style={{ float: 'left', marginTop: '9px', marginRight: '5px' }}>
                                <Form.Check type="radio" aria-label="radio 1" />
                            </div>

                            <p style={{ float: 'left', marginTop: '5px' }}> i will order by SMS</p>


                        </>
                    </div>
                    <div style={{ height: 50, width: "100%", border: '2px solid grey', borderRadius: 12, marginTop: 35 }}>

                        <>

                            <div style={{ float: 'left', marginTop: '9px', marginRight: '5px' }}>
                                <Form.Check type="radio" aria-label="radio 1" />
                            </div>

                            <p style={{ float: 'left', marginTop: '5px' }}> i will order by website or mobile app</p>
                        </>
                    </div>
                    <p style={{ textAlign: 'left' }}>you can change this option later in your profile</p>

                    <Button style={{ width: 300, height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", margin: "20px", marginLeft: '40px', marginBottom: '80px' }}

                    ><h4>CONTINUE</h4></Button>

                </div>
                <hr />
                <Footer></Footer>
            </Container>

        </div>
    );
};

export default ReceiveText;