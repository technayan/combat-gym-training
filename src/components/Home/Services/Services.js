import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Service from './Service/Service'
import './Services.css'



const Services = () => {
  // Declaring States
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
  })
  return (
    <section>
      <Container>
        <h2 className="section-title text-center">Services</h2>
        <div className="services-wrapper py-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
