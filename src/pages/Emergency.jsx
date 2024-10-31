import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

function Emergency() {
  const [formData, setFormData] = useState({
    name: '',
    practice_name: '',
    email: '',
    phone: '',
    issue_type: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit to an API endpoint
    console.log('Emergency form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white">
              <h2 className="text-center mb-0">Emergency IT Support</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-warning">
                <h4 className="alert-heading">Important Notice</h4>
                <p>This form is for emergency IT support only. For non-emergency issues, please use our <Link to="/contact">regular contact form</Link> or submit a ticket through the client portal.</p>
                <hr />
                <p className="mb-0">Emergency support is available 24/7 for critical issues affecting your practice's operations.</p>
              </div>

              <form onSubmit={handleSubmit} className="needs-validation">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Contact Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="practice_name" className="form-label">Practice Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="practice_name"
                    name="practice_name"
                    value={formData.practice_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-text">We'll contact you immediately at this number.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="issue_type" className="form-label">Type of Emergency *</label>
                  <select
                    className="form-select"
                    id="issue_type"
                    name="issue_type"
                    value={formData.issue_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select issue type</option>
                    <option value="system_down">System Down</option>
                    <option value="data_access">Cannot Access Patient Data</option>
                    <option value="security">Security Breach</option>
                    <option value="hardware">Critical Hardware Failure</option>
                    <option value="network">Network Outage</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description of Emergency *</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="form-text">Please provide as much detail as possible about the emergency.</div>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-danger btn-lg">Submit Emergency Request</button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <h5>For immediate assistance, you can also call our emergency hotline:</h5>
            <p className="display-6">1-833-416-8324</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emergency
