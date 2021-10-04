import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const Enrollment = () => {
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1 className="home-heading mt-5 mb-5">Enrollment Form</h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Label><strong>Select Desired Service</strong></Form.Label>
                        <Form.Select className="mb-3">
                            <option>Basic</option>
                            <option>Medium</option>
                            <option>Advanced</option>
                            <option>Premium</option>
                            <option>Professional</option>
                            <option>A1</option>
                            <option>A2</option>
                            <option>B1</option>
                            <option>B2</option>
                            <option>C1</option>
                            <option>C2</option>
                            <option>None of this</option>
                        </Form.Select>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><strong>Email</strong></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label><strong>Password</strong></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label><strong>Permanent Address</strong></Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label><strong>Current Address</strong></Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label><strong>City</strong></Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><strong>State</strong></Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label><strong>Zip</strong></Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

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

export default Enrollment;