import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import './SignIn.css'

const SignIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation();



  let from = location.state?.from?.pathname || '/';

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  const handleForgotPassword = async () => {
    let email = emailRef.current.value;
    await sendPasswordResetEmail(email);
  }

  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user || user1) {
    navigate(from, { replace: true });
  }

 

  return (
    <div className="form-container">
      <div className="form-wrapper mx-auto">
        <Form onSubmit={handleSignIn} className="form p-3 p-md-4 rounded">
          <h2 className="form-title text-center py-2">Sign In</h2>
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
          <p className="text-danger">{error?.essage}</p>
          
          <Button className="w-100 submit-btn" variant="primary" type="submit">
            Sign In
          </Button>
          
          <p onClick={handleForgotPassword} style={{color:'#ff776b', margin: '10px 0 10px', cursor:'pointer'}}>Forgot Password?</p>
          <p className="my-1">
            New to Combat?{' '}
            <Link className="form-link" to={'/signup'}>
              Creat an account
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

export default SignIn;
