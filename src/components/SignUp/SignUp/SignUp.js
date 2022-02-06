import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import logo from '../../../image/Photos and Icons/logo.png'
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const SignUp = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <h4 style={{ textAlign: 'left', marginBottom: '60px', marginTop: '40px' }}>SIGN UP</h4>
                <hr />

                <h3 style={{ fontWeight: '700', marginTop: '80px' }}> What is your address?</h3>
                <p>we use address to locate best place to deliver your meal</p>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <h5 style={{ textAlign: 'left', marginTop: 0 }}>ADDRESS</h5>
                    <Form.Control style={{ padding: '12px', border: '2px solid grey' }} type="text" />
                    <p>Don't know your company's address? <span style={{ color: '#0cce87' }}>search by company name</span></p>

                </Form.Group>
                <Button style={{ width: 300, height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", margin: "20px", marginLeft: '40px', marginBottom: '80px' }}

                >CONTINUE</Button>

                <hr />

                <Footer></Footer>
            </Container>

        </div>
    );
};

export default SignUp;