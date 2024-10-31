import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import logoImg from '../assets/images/Paradox Logo Horizontal - White Font.png'

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logoImg} alt="Paradox" className="footer-logo mb-2" />
            <p>Professional IT solutions for dental practices</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/services" className="text-light">Services</Link></li>
              <li><Link to="/compliance" className="text-light">Compliance</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 contact-info">
            <h5>Contact</h5>
            <div className="contact-item">
              <FeatherIcon icon="phone" />
              <span>1-833-416-8324</span>
            </div>
            <div className="contact-item">
              <FeatherIcon icon="mail" />
              <span>info@paradoxtech.ca</span>
            </div>
            <div className="contact-item">
              <FeatherIcon icon="map-pin" />
              <span>
                10 Four Seasons Pl<br />
                Suite 1000<br />
                Etobicoke, ON M9B6H7
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Paradox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
