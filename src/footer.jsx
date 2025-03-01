import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>

        {/* Column 2 - Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>123 Emergency Lane, Mumbai, India</p>
          <p>emergency@shabdx.in</p>
          <p>Phone: +91-911-1234567</p>
        </div>

        {/* Column 3 - Follow Us */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-column">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 ShabdX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
