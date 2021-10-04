import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './HomeServices.css'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [homeService, setHomeService] = useState([])
    useEffect(() => {
        fetch('./homeServices.JSON')
            .then(res => res.json())
            .then(data => setHomeService(data))
    }, [])

    console.log(homeService);

    return (
        <div className="row mb-5">
            <h1 className="pt-5 my-5 home-heading">Services</h1>
            {
                homeService.map(hs =>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card className="card-style" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={hs.img} />
                            <Card.Body>
                                <Card.Text><strong>Course Type: </strong>{hs.category}</Card.Text>
                                <Card.Text><strong>Course Duration: </strong> {hs.duration} Months</Card.Text>
                                <Card.Text><strong>Instructor Name: </strong> {hs.location}</Card.Text>
                                <Card.Text><strong>Max Student: </strong> {hs.students}</Card.Text>
                                <Card.Text><strong>Tuition Fee: </strong> {hs.cost}</Card.Text>
                                <br /><br />
                                <Card.Text><strong>Rating: </strong><br /><Rating
                                    initialRating={hs.star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly >
                                </Rating></Card.Text>
                                <Link to="/enrollment">
                                    <Button className="mt-5" variant="primary">Enroll Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div >
    );
};

export default HomeServices;