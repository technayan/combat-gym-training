import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img className='logo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link text-white mx-1 my-2 my-lg-0' to={'/blogs'}>Blogs</Link>
              <Link className='nav-link text-white mx-1 my-2 my-lg-0' to={'/about'}>About</Link>
              <Link className='nav-link text-white mx-1 my-2 my-lg-0' to={'/signin'}>Sign In</Link>
              <Link className='nav-link text-white mx-1 my-2 my-lg-0' to={'/signup'}>Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
