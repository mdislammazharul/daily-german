import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1 className="home-heading mt-5 mb-5">Contact Us</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="password" placeholder="Enter Phone No." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className="d-flex justify-content-center">
                            <Form.Check className="mx-2" type="checkbox"></Form.Check>
                            <Form.Label>Check Me Out</Form.Label>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;