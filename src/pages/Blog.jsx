import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [category, setCategory] = useState('')
  
  // Sample blog posts data - In a real app, this would come from an API
  const posts = [
    {
      id: 1,
      title: "Protecting Patient Data: Best Practices for Dental Practices",
      summary: "Learn about the essential security measures every dental practice should implement to protect sensitive patient information.",
      category: "security",
      date: "October 25, 2024"
    },
    {
      id: 2,
      title: "Digital Transformation in Modern Dentistry",
      summary: "Exploring how digital technologies are revolutionizing dental practices and improving patient care.",
      category: "industry",
      date: "October 24, 2024"
    }
  ]

  const filteredPosts = category ? posts.filter(post => post.category === category) : posts

  return (
    <div className="container">
      <h1 className="text-center mb-5">Blog</h1>
      
      <div className="row mb-4">
        <div className="col-md-12">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <button 
                className={`nav-link ${!category ? 'active' : ''}`}
                onClick={() => setCategory('')}
              >
                All Posts
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${category === 'security' ? 'active' : ''}`}
                onClick={() => setCategory('security')}
              >
                Security Tips
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${category === 'industry' ? 'active' : ''}`}
                onClick={() => setCategory('industry')}
              >
                Industry News
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        {filteredPosts.map(post => (
          <div className="col-md-6 mb-4" key={post.id}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className={`badge bg-${post.category === 'security' ? 'info' : 'primary'}`}>
                    {post.category === 'security' ? 'Security' : 'Industry'}
                  </span>
                  <small className="text-muted">{post.date}</small>
                </div>
                <h3 className="card-title h4">{post.title}</h3>
                <p className="card-text">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="btn btn-outline-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-12 text-center">
            <p>No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
