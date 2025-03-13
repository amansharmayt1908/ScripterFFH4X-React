import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/scripter.js/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="mailto:amansharmayt19@gmail.com">
        <MdEmail />
      </a>
      <a href="https://www.youtube.com/@ScripterFFH4X" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialLinks; 