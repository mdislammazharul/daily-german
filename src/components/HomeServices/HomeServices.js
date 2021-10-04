import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const HomeServices = () => {
    const [homeService, setHomeService] = useState([])
    useEffect(() => {
        fetch('./homeServices.JSON')
            .then(res => res.json())
            .then(data => setHomeService(data))
    }, [])
    return (
        <div className="row">
            <h1>Services</h1>
            {
                homeService.map(hs =>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={hs.img} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    );
};

export default HomeServices;