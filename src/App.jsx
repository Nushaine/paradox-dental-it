import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Compliance from './pages/Compliance'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Emergency from './pages/Emergency'
import Login from './pages/Login'
import ClientPortal from './pages/portal/ClientPortal'
import TicketsDashboard from './pages/portal/TicketsDashboard'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={<ClientPortal />} />
            <Route path="/portal/tickets" element={<TicketsDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
