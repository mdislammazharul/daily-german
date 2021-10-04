import React from 'react';
import './HappyLearners.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// this is basically instructor page

const HappyLearners = (props) => {

    const { name, registered, location, email, phone, picture } = props.student;
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <Card className="card-style" style={{ width: '18rem' }}>
                <Card.Img className="user-img" variant="top" src={picture.thumbnail} />
                <Card.Body>
                    <Card.Title><strong>Name: </strong>{name.title} {name.first} {name.last}</Card.Title>
                    <Card.Text><strong>Country: </strong>{location.country}</Card.Text>
                    <Card.Text><strong>State: </strong>{location.state}</Card.Text>
                    <Card.Text><strong>Phone: </strong>{phone}</Card.Text>
                    <Card.Text><strong>E-mail: </strong>{email}</Card.Text>
                    <Card.Text><strong>Experience: </strong>{registered.age} Years</Card.Text>
                    {/* use Link to redirect the button press into contact us page */}
                    <Link to="/contact">
                        <Button className="mt-4" variant="primary">Contact Me</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HappyLearners;