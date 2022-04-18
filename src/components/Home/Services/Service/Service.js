import React from 'react'
import { Card } from 'react-bootstrap'
import './Service.css'

const Services = ({ service }) => {
  const { name, img, price, details } = service
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{name}</Card.Title>
          <h3 className='service-price'>${price}<span style={{fontSize: '16px'}}>/month</span></h3>
        </div>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <button className="service-btn">Book a Session</button>
    </Card>
  )
}

export default Services
