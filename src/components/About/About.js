import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='about-section'>
            <Container className='mt-5 pt-5'>
                <Row>
                    <div className="col-md-4 text-center">
                        <img className='profile-img' src="https://i.ibb.co/VCYQVDB/dev-nayan-8.png" alt="Abdullah Al Mamun Nayan" />
                        <h1 className='name mt-3'>MD. Abdullah Nayan.</h1>
                        <h5>Junior Web Developer</h5>
                    </div>
                    <div className="col-md-8">
                        <h2 className='about-title mt-5 mt-md-0'>About</h2>
                        <p className='about-text'>I am Md. Abdullah Nayan. I am a junior web developer. Currently I am learning about React. I started my web development journey with Programming Hero.</p>
                        <h2 className='about-title mt-5 mt-md-0'>Goal</h2>
                        <p className='about-text'>My Goal is to be a Full Stack Web Developer. I want to shine my career in the Web Development Sector. That's why I am preparing myself everyday. The journey of a full stack developer is not very easy. So, I am working hard to achieve my goal. I will try my best and InshahAllah I will be successful. My next mission is Back End. I will work hard to understand the Back End process of a website.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;