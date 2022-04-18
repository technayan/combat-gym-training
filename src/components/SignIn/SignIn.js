import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  const handleSignIn = e => {
    e.preventDefault();
  }
  return (
    <div className='form-container d-flex justify-content-center align-items-center'>
        
      <Form onSubmit={handleSignIn} className='form p-3 p-md-4 rounded'>
        <h2 className='form-title text-center py-2'>Sign In</h2>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <p className='py-2'>New to Combat? <Link className='form-link' to={'/signup'}>Creat an account</Link></p>
        <Button className='w-100 submit-btn' variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  )
}

export default SignIn
