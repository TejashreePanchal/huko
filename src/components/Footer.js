import React from 'react';
import '../css/HeaderFooter.css';
import apple from '../images/apple.png';
import google from '../images/google.png';
import linkedin from '../images/linkedin.jpg';
import facebook from '../images/facebook.jpg';
import instagram from '../images/instagram.jpg';
import youtube from '../images/youtube.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="store-links">
        <img src={apple} alt="App Store" />
        <img src={google} alt="Google Play" />
      </div>
      <div className="links">
        <div className="row">
          <a href="/account">Account Info</a>
        </div>
        <div className="row">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
