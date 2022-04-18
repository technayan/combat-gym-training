import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Services = ({ service }) => {
  const { id, name, img, price, details } = service;

  let navigate = useNavigate();
  
  // Booking Button's click handler
  const handleBooking = (id) => {
    navigate(`/checkout/${id}`);
  }
  return (
    <Card>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{name}</Card.Title>
          <h3 className='service-price'>${price}<span style={{fontSize: '16px'}}>/month</span></h3>
        </div>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <button onClick={() => handleBooking(id)} className="service-btn">Book a Session</button>
    </Card>
  )
}

export default Services
