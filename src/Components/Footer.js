// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>aqui va discripcion</p>
        </div>
        <div className="footer-column">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: ProjectFut@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ProjectFut. Reservados todos los derechos.</p>
      </div>
    </footer>
  );
};

export default Footer;
