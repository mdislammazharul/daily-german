import React from 'react';
import './HappyLearners.css'
import { Card, Button } from 'react-bootstrap';

const HappyLearners = (props) => {

    const { name, gender, location, email, phone, picture } = props.student;
    return (
        <div className="col-md-4">
            <Card className="card-style" style={{ width: '18rem' }}>
                <Card.Img className="user-img" variant="top" src={picture.thumbnail} />
                <Card.Body>
                    <Card.Title>{name.title} {name.first} {name.last}</Card.Title>
                    <Card.Text>{gender}</Card.Text>
                    <Card.Text>{location.country}</Card.Text>
                    <Card.Text>{location.state}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                    <Card.Text>{email}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HappyLearners;