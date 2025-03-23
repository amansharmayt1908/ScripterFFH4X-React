import React from 'react'
import NavBar from './NavBar'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img src="/images/SCRIPTERLOGO.jpg" alt="Scripter FFH4X Logo" className="hero-logo" />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">SCRIPTER FFH4X</h1>
            <p className="hero-subtitle">Premium Gaming Solutions</p>
          </div>
        </div>
        
        <div className="cta-buttons">
          <Link to="/PaidSensi" className="cta-button primary">
            Paid Sensi
          </Link>
          <Link to="/PaidOptimization" className="cta-button secondary">
            Paid Optimization
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Precision Aiming</h3>
          <p>Enhance your accuracy with our custom sensitivity settings</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Performance Boost</h3>
          <p>Optimize your device for maximum gaming performance</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3>Custom Tweaks</h3>
          <p>Advanced configurations for competitive advantage</p>
        </div>
      </div>
      
      <div className="social-section">
        <h2>Connect With Us</h2>
        <SocialLinks />
      </div>
    </div>
  )
}

export default HomePage
