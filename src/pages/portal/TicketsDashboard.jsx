import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'

function TicketsDashboard() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: "Network connectivity issues",
      description: "Having trouble connecting to the network",
      status: "open",
      priority: "high",
      created_at: "2024-10-30T15:00:00Z"
    },
    {
      id: 2,
      subject: "Printer configuration",
      description: "Need help setting up new printer",
      status: "closed",
      priority: "medium",
      created_at: "2024-10-29T10:00:00Z"
    }
  ])

  const [newTicket, setNewTicket] = useState({
    subject: '',
    description: '',
    priority: 'medium'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    const ticket = {
      id: tickets.length + 1,
      ...newTicket,
      status: 'open',
      created_at: new Date().toISOString()
    }
    setTickets([ticket, ...tickets])
    setNewTicket({ subject: '', description: '', priority: 'medium' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewTicket(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <h2 className="mb-4">Support Tickets</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Create New Ticket</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={newTicket.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={newTicket.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="priority" className="form-label">Priority</label>
              <select
                className="form-select"
                id="priority"
                name="priority"
                value={newTicket.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              <FeatherIcon icon="plus-circle" className="me-2" />
              Create Ticket
            </button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Your Tickets</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map(ticket => (
                  <tr key={ticket.id}>
                    <td>{ticket.subject}</td>
                    <td>
                      <span className={`badge bg-${ticket.status === 'open' ? 'success' : 'secondary'}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td>
                      <span className={`badge bg-${
                        ticket.priority === 'high' ? 'danger' :
                        ticket.priority === 'medium' ? 'warning' : 'info'
                      }`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td>{new Date(ticket.created_at).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">View</button>
                      <button className="btn btn-sm btn-outline-danger">Close</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketsDashboard
