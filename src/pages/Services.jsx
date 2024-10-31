import React from 'react'
import FeatherIcon from 'feather-icons-react'

function Services() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Our Services</h1>
      
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                <FeatherIcon icon="shield" className="me-2" />
                HIPAA Compliance
              </h3>
              <p className="card-text">Comprehensive HIPAA compliance solutions tailored for dental practices:</p>
              <ul>
                <li>Risk assessments and gap analysis</li>
                <li>Policy and procedure development</li>
                <li>Staff training and documentation</li>
                <li>Regular compliance audits</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                <FeatherIcon icon="cloud" className="me-2" />
                Cloud Solutions
              </h3>
              <p className="card-text">Secure and reliable cloud services:</p>
              <ul>
                <li>Secure data backup and recovery</li>
                <li>Cloud-based practice management</li>
                <li>Remote access solutions</li>
                <li>Scalable storage solutions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                <FeatherIcon icon="settings" className="me-2" />
                IT Support
              </h3>
              <p className="card-text">Comprehensive technical support services:</p>
              <ul>
                <li>24/7 help desk support</li>
                <li>Network monitoring and maintenance</li>
                <li>Hardware and software troubleshooting</li>
                <li>System optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                <FeatherIcon icon="lock" className="me-2" />
                Security Services
              </h3>
              <p className="card-text">Advanced cybersecurity protection:</p>
              <ul>
                <li>Firewall management</li>
                <li>Antivirus and malware protection</li>
                <li>Employee security training</li>
                <li>Security audits and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
