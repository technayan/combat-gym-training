import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review/Review';

const ClientReviews = () => {
    // Declaring States
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch ('clients.json')
        .then (res => res.json())
        .then (data => setReviews(data))
    });
    return (
        <section>
      <Container>
        <h2 className="section-title text-center">Client Reviews</h2>
        <div className="services-wrapper py-5">
          {reviews.map((review) => (
            <Review key={review.id} clientReview={review}></Review>
          ))}
        </div>
      </Container>
    </section>
    );
};

export default ClientReviews;