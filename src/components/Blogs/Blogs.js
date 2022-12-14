import React from 'react'
import { Container } from 'react-bootstrap'
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="blog-section">
      <Container>
          <div className="blog">
            <h3>Defference between Authorization and Authentication?</h3>
            <p>
              Authentication is the process to verify someone. Authentication
              identifies the user and his/her details. On the other hand,
              Authorization is the process that verifies the user's access. It
              verifies which file, data, or document the user can access.
            </p>
          </div>
          <div className="blog">
            <h3>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h3>
            <p>
              I am using firebase for authentication system on my website.
              Firebase is a authentication system provider by Google. I have
              Active Directory, OpenID Connect, LDAP, SAP and many more as other
              options to implement authentication.
            </p>
          </div>
          <div className="blog">
            <h3>
              What other services does firebase provide other than
              authentication?
            </h3>
            <p>
              Firebase is a authentication system provider. Beside this service
              firebase offers many other services to us. Firebase provides Cloud
              Firestore, Cloud Functions, Hosting, Cloud Storage, Google
              Analytics, Predictions, Cloud Messaging etc.
            </p>
          </div>
      </Container>
    </div>
  )
}

export default Blogs
