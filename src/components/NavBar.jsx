import React, { useState } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className="nav-channel-logo" onClick={() => {window.open("https://www.youtube.com/@ScripterFFH4X" , "_blank", "noopener,noreferrer")}}><img src="/images/SCRIPTERLOGO.jpg" alt="image not found" />SCRIPTER FFH4X</div>
      
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="#about">YOUTUBE</a>
        <a href="#services">Services</a>
        <a href="https://www.instagram.com/scripter.js/" target="_blank">Contact</a>
      </div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
