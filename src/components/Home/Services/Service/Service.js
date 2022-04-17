import React from 'react'
import { Card } from 'react-bootstrap'
import './Service.css'

const Services = ({service}) => {
  const {name,img, details} = service;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
      <button className='service-btn'>
        Book a Session
      </button>
    </Card>
  )
}

export default Services
