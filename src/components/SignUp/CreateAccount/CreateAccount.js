import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const CreateAccount = () => {
    return (
        <div>
            <Container>
                <div>
                    <Header></Header>
                    <h4 style={{ textAlign: 'left', marginBottom: '60px', marginTop: '40px' }}>SIGN UP</h4>
                    <hr />
                    <h4 style={{ marginTop: '70px', fontWeight: '700' }} >Create Your Account</h4>



                    <div style={{ width: '45%', margin: 'auto' }}>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label></Form.Label>
                            <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: '700' }}>FIRST NAME</h6>
                            <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, margin: 'auto' }} type="text" />
                            <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: 700 }}>LAST NAME</h6>
                            <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, marginTop: 20, marginBottom: 20, margin: '20px  auto' }} type="text" />
                            <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: 700 }}>EMAIL</h6>
                            <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, margin: ' auto' }} type="text" />
                            <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: 700 }}>PASSWORD</h6>
                            <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, margin: ' auto' }} type="text" />
                            {/* <p>Don't know your company's address? <span style={{ color: '#0cce87' }}>search by company name</span></p> */}

                        </Form.Group>
                        <Form.Check type="checkbox" label="i agree to the terms of service and privacy police" /> <p></p>
                        <Button style={{ width: '60%', height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", margin: "20px" }}

                        >CONTINUE</Button>



                    </div>



                    <hr />
                    <Footer></Footer>

                </div >
            </Container>
        </div>
    );
};

export default CreateAccount;