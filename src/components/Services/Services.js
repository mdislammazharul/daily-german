import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="row service-container pb-5">
            <h1 className="my-5 home-heading">Our Services</h1>
            {
                services.map(service =>
                    <div key={service.key} className="col-md-3 d-flex justify-content-center">
                        <Card className="card-style mb-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title className="pb-2"><strong>Course Title: </strong>{service.category}</Card.Title>
                                <Card.Text><strong>Instructor Name: </strong> {service.instructor}</Card.Text>
                                <Card.Text><strong>Course Type: </strong>{service.category}</Card.Text>
                                <Card.Text><strong>Course Duration: </strong> {service.duration} Months</Card.Text>
                                <Card.Text><strong>Max Student: </strong> {service.students}</Card.Text>
                                <Card.Text><strong>Tuition Fee: </strong> $ {service.cost}</Card.Text>
                                <br /><br />
                                <Card.Text><strong>Rating: </strong><br /><Rating
                                    initialRating={service.star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly >
                                </Rating></Card.Text>
                                {/* use Link to redirect button press into enrollment page */}
                                <Link to="/enrollment">
                                    <Button className="mt-5" variant="primary">Enroll Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    );
};

export default Services;