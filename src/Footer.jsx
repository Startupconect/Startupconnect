import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer123">
    <div className="footer-container">
      {/* Left Section */}
      <div className="footer-left">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Start-up Nexus Logo" />
        </div>
        <div className="footer-info">
          <h2>Start-up Connect</h2>
          <p>Toll Free Number: 1800 115 565</p>
          <p>Working Hrs: 10:00 am - 6:00 pm</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <ul>
          <li><a href="/termsandcondition">Terms and Condition</a></li>
          <li><a href="/privacypolicy">Privacy Policy</a></li>
          <li><a href="/Faq12">FAQ</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <p>Last Updated:</p>
        <p>16-SEP-2024 | 03:00 PM</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
