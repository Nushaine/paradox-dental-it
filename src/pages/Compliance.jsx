import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

function Compliance() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">HIPAA Compliance</h1>
      
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          <div className="alert alert-info">
            <h4 className="alert-heading">Why HIPAA Compliance Matters</h4>
            <p>In the dental healthcare sector, protecting patient information isn't just good practice—it's the law. HIPAA compliance ensures your practice maintains the highest standards of patient data security while avoiding potential penalties.</p>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Risk Assessment</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Security risk analysis</li>
                <li className="list-group-item">Vulnerability scanning</li>
                <li className="list-group-item">Gap analysis</li>
                <li className="list-group-item">Remediation planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Policy Development</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HIPAA-compliant policies</li>
                <li className="list-group-item">Security procedures</li>
                <li className="list-group-item">Documentation templates</li>
                <li className="list-group-item">Implementation guidance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Staff Training</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HIPAA awareness training</li>
                <li className="list-group-item">Security best practices</li>
                <li className="list-group-item">Incident response training</li>
                <li className="list-group-item">Ongoing education</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Ongoing Compliance</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Regular audits</li>
                <li className="list-group-item">Policy updates</li>
                <li className="list-group-item">Compliance monitoring</li>
                <li className="list-group-item">Annual reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3>Ready to Ensure Your Practice's HIPAA Compliance?</h3>
        <p className="lead">Let us help you protect your patient data and maintain regulatory compliance.</p>
        <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
      </div>
    </div>
  )
}

export default Compliance
