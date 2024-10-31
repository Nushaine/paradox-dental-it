import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/Paradox Logo Horizontal - White Font.png'

function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logoImg} alt="Paradox" className="navbar-logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/compliance') ? 'active' : ''}`} to="/compliance">
                Compliance
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/blog') ? 'active' : ''}`} to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-danger ${isActive('/emergency') ? 'active' : ''}`} to="/emergency">
                Emergency Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/login') ? 'active' : ''}`} to="/login">
                Client Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
