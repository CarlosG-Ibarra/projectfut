import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>
            'Proyect Fut': tu destino futbolístico definitivo. Análisis,
            estadísticas y noticias actualizadas. Participa en debates y
            encuestas. Accesible desde cualquier dispositivo. Vive el fútbol con
            nosotros.
          </p>
        </div>
        <div className="footer-column">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <a href="/">Indice</a>
            </li>
            <li>
              <a href="/About">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/contact">Contactos</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contactos</h3>
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
