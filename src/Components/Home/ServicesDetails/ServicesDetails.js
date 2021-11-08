import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesDetails.css';

const ServicesDetails = ({ service }) => {
    const { title, description, price, _id } = service;

    return (
        <Card style={{ width: '20rem', marginTop: 20 }}>
            <div className="d-flex justify-content-center">
                <Card.Img variant="top" src={`data:image/png;base64,${service.image.img}`} alt="" />
            </div>

            <Card.Body className="text-left">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text> Cost: ${price}</Card.Text>
                <Link to={`/dashboard/${_id}`} className="service-link d-flex justify-content-center">
                    <Button variant="warning">Buy Now</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ServicesDetails;
