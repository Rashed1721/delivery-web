import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const AddCompany = () => {
    return (
        <Container>
            <div>
                <Header></Header>
                <h4 style={{ textAlign: 'left', marginBottom: '60px', marginTop: '40px' }}>SIGN UP</h4>
                <hr />
                <h4 style={{ marginTop: '70px', fontWeight: '700' }}>We coudn't find any companies at that address</h4>
                <p>peach delivers directly to your office,tell us more about your company so we can setup <br /> your building nota a building administrator?Thats alright!Any employee can the first to <br />
                    Sign-up at their office!
                </p>


                <div style={{ width: '45%', margin: 'auto' }}>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label></Form.Label>
                        <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: '700' }}>COMPANY NAME</h6>
                        <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, margin: 'auto' }} type="text" />
                        <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: 700 }}>EMPLOYEE RANGE(EMPLOYEES WHO WORKS IN YOUR OFFICE)</h6>
                        <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, marginTop: 20, marginBottom: 20, margin: '20px  auto' }} type="text" />
                        <h6 style={{ textAlign: 'left', marginTop: 0, fontWeight: 700 }}>ADDRESS</h6>
                        <Form.Control style={{ padding: '12px', border: '2px solid grey', width: '100%', height: 60, margin: ' auto' }} type="text" />
                        <p>Don't know your company's address? <span style={{ color: '#0cce87' }}>search by company name</span></p>
                    </Form.Group>

                    <Button style={{ width: '100%', height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", margin: "20px" }}

                    >CONTINUE</Button>

                    <div style={{ display: 'inline-block', marginTop: '7px' }}>
                        <h6 style={{ color: "red" }}>GO BACK</h6>
                        <hr style={{ color: 'red' }}></hr>
                    </div>

                </div>



                <hr />
                <Footer></Footer>

            </div >
        </Container>
    );
};

export default AddCompany;