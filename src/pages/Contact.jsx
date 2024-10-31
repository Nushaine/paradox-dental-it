import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    practice_name: '',
    email: '',
    phone: '',
    service_type: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit to an API endpoint
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
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
                <label htmlFor="practice_name" className="form-label">Practice Name</label>
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
                <label htmlFor="email" className="form-label">Email</label>
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
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="service_type" className="form-label">Service Interest</label>
                <select
                  className="form-select"
                  id="service_type"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="compliance">HIPAA Compliance</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="support">IT Support</option>
                  <option value="security">Security Services</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
