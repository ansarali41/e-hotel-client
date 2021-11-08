import React from 'react';
import { Card } from 'react-bootstrap';
import './HotelDetails.css';

const HotelDetails = ({ service }) => {
    const { title, description, price, _id, image } = service;

    return (
        <Card style={{ width: '20rem', marginTop: 20 }}>
            <div className="d-flex justify-content-center">
                <Card.Img variant="top" src={`data:image/png;base64,${image.img}`} alt="" />
            </div>

            <Card.Body className="text-left">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text> Cost: ${price}</Card.Text>
                <Card.Text> 2 beds</Card.Text>
                <Card.Text> Single Rooms</Card.Text>
                <Card.Text> Free wifi</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HotelDetails;
