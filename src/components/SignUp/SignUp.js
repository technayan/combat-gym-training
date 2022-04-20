import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const SignUp = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const confirmPasswordRef = useRef('')
  const [check, setCheck] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const [
    createUserWithEmailAndPassword,
    user,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth)

  if (user || user1) {
    navigate(from, { replace: true });
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value

    if (password.length < 6) {
      setErrorMessage('Password should contain at lease 6 characters!')
      return
    }

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password)
    } else {
      setErrorMessage('Your two passwords are not same!')
      return
    }

    if (error) {
      setErrorMessage(error.message)
      return
    }
  }

  console.log(error)

  return (
    <div className="form-container">
      <div className="form-wrapper mx-auto">
        <Form onSubmit={handleSignUp} className="form p-3 p-md-4 rounded">
          <h2 className="form-title text-center py-2">Sign Up</h2>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
            <Form.Control
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <p className="text-danger">{errorMessage}</p>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setCheck(!check)}
              type="checkbox"
              label="Accept the terms and conditions"
            />
          </Form.Group>

          
          <Button
            className={`w-100 submit-btn ${!check && 'disabled'} `}
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>

          <p className="my-3">
            Already have an account?{' '}
            <Link className="form-link" to={'/signin'}>
              Sign In
            </Link>
          </p>
        </Form>
        <p className="divider position-relative text-center my-3">OR</p>
        <button
          className="google-signin-btn mx-auto py-2 w-100 d-flex justify-content-center"
          onClick={() => signInWithGoogle()}
        >
          <i className="ri-google-fill me-2"></i>SignIn with Google
        </button>
      </div>
    </div>
  )
}

export default SignUp
