import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Compliance = lazy(() => import('./pages/Compliance'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Emergency = lazy(() => import('./pages/Emergency'))
const Login = lazy(() => import('./pages/Login'))
const ClientPortal = lazy(() => import('./pages/portal/ClientPortal'))
const TicketsDashboard = lazy(() => import('./pages/portal/TicketsDashboard'))
const NotFound = lazy(() => import('./components/NotFound'))

// Loading spinner component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/portal/*" 
                element={
                  <Routes>
                    <Route path="/" element={<ClientPortal />} />
                    <Route path="/tickets" element={<TicketsDashboard />} />
                  </Routes>
                }
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
