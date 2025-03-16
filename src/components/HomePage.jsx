import React from 'react'
import NavBar from './NavBar'
import SocialLinks from './SocialLinks'
import './HomePage.css'
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="home-container">
        <div className="home-img-title"><img src="./src/images/SCRIPTERLOGO.jpg" alt="image not found" /><h1 className="home-title">SCRIPTER FFH4X</h1></div>
        
      </div>
      <div className="home-button-container">
      <div className="home-buttons"><a href="/PaidSensi"><button>Paid Sensi</button></a></div>
      <div className="home-buttons"><a href="/"><button>Paid Optimization</button></a></div>
      </div>
      <div className="home-social-links">
        <SocialLinks />

      </div>
    </div>
  )
}

export default HomePage
