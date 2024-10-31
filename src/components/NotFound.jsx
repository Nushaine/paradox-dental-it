import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

function NotFound() {
  return (
    <div className="container text-center py-5">
      <FeatherIcon icon="alert-triangle" size={64} className="mb-4" />
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-3">
        <FeatherIcon icon="home" className="me-2" />
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound
