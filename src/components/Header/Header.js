import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar className='fixed-top' bg="black" variant='dark' expand="lg">
        <Container>
          <Link to={'/'}>
              <img className='logo my-2' src={logo} alt="Combat Gym Training" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link text-white mx-1 my-2' to={'/blogs'}>Blogs</Link>
              <Link className='nav-link text-white mx-1 my-2' to={'/about'}>About</Link>
              {
                user ? <Link onClick={handleSignOut} className='nav-link text-white mx-1 my-2' to={'/signin'}>Sign Out</Link> :
              
                <>
                <Link className='nav-link text-white mx-1 my-2' to={'/signin'}>Sign In</Link>
                <Link className='nav-link text-white mx-1 my-2' to={'/signup'}>Sign Up</Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
