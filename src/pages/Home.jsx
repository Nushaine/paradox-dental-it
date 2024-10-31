import React from 'react'
import FeatherIcon from 'feather-icons-react'

function Home() {
  return (
    <>
      <section className="hero-section text-center py-5">
        <h1 className="display-4">Specialized IT Solutions for Dental Practices</h1>
        <p className="lead">Secure, Compliant, and Reliable Technology Services</p>
        <div className="mt-4">
          <a href="/contact" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>

      <section className="services-overview py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <FeatherIcon icon="shield" className="mb-3" />
                <h5 className="card-title">HIPAA Compliance</h5>
                <p className="card-text">Ensure your practice meets all healthcare data security requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <FeatherIcon icon="cloud" className="mb-3" />
                <h5 className="card-title">Cloud Solutions</h5>
                <p className="card-text">Secure cloud storage and backup for patient records.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <FeatherIcon icon="settings" className="mb-3" />
                <h5 className="card-title">IT Support</h5>
                <p className="card-text">24/7 technical support for your practice's needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <FeatherIcon icon="lock" className="mb-3" />
                <h5 className="card-title">Security</h5>
                <p className="card-text">Advanced cybersecurity protection for your practice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section text-center py-5">
        <h2>Ready to Elevate Your Practice's IT Infrastructure?</h2>
        <p className="lead">Let's discuss how we can help protect and optimize your dental practice.</p>
        <a href="/contact" className="btn btn-lg btn-primary">Contact Us Today</a>
      </section>
    </>
  )
}

export default Home
