import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

function ClientPortal() {
  // Sample client data - In a real app, this would come from an API
  const client = {
    practice_name: "Test Dental Practice",
    email: "info@paradoxtech.ca",
    last_login: "2024-10-31T12:00:00Z"
  }

  const recentTickets = [
    {
      id: 1,
      subject: "Network connectivity issues",
      status: "open",
      priority: "high",
      created_at: "2024-10-30T15:00:00Z"
    },
    {
      id: 2,
      subject: "Printer configuration",
      status: "closed",
      priority: "medium",
      created_at: "2024-10-29T10:00:00Z"
    }
  ]

  return (
    <div className="container">
      <h1>Welcome, {client.practice_name}</h1>
      <p className="text-muted">Last login: {new Date(client.last_login).toLocaleString()}</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <div className="d-grid gap-2">
                <Link to="/portal/tickets" className="btn btn-primary">
                  <FeatherIcon icon="plus-circle" className="me-2" />
                  Create New Ticket
                </Link>
                <Link to="/emergency" className="btn btn-danger">
                  <FeatherIcon icon="alert-circle" className="me-2" />
                  Emergency Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Information</h5>
              <ul className="list-unstyled">
                <li><strong>Practice:</strong> {client.practice_name}</li>
                <li><strong>Email:</strong> {client.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Recent Support Tickets</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map(ticket => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/portal/tickets" className="btn btn-outline-primary">View All Tickets</Link>
        </div>
      </div>
    </div>
  )
}

export default ClientPortal
