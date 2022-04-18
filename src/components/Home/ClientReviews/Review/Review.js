import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'

const Review = ({ clientReview }) => {
    const {img, name, review} = clientReview;

    return (
        <Card className='text-center'>
      <Card.Img className='client-img' src={img} alt={name} />
      <Card.Body>
        <Card.Title className='client-name'>{name}</Card.Title>
        
        <Card.Text>"{review}"</Card.Text>
      </Card.Body>
    </Card>
    );
};

export default Review;