import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <img src={Wave} alt="Footer Wave" className="footer-wave" />

      <div className="footer-content">
        {/* Contact Section */}
        <div className="footer-section contact">
          <h3 className="footer-title">Get in Touch</h3>
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:anuranshsrivastava84@gmail.com" className="contact-text">
              anuranshsrivastava84@gmail.com
            </a>
          </div>
          <p className="footer-text">
            Let’s collaborate and turn ideas into reality!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li>
                          <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="about" spy={true} smooth={true}>
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="portfolio" spy={true} smooth={true}>
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link to="contact" spy={true} smooth={true}>
                            Contact
                          </Link>
                        </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h3 className="footer-title">Follow Me</h3>
          <div className="social-icons">
            <a href="https://instagram.com/anuransh7" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/Anuransh8" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/anuransh-srivastava-1b72a7265/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/Anuransh8" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Anuransh Srivastava. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;