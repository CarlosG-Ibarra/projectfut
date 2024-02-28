import React from "react";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ProjectFut</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Indice</a>
          </li>
          <li>
            <a href="/about">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>
      <div className="login-container">
        <button className="login-button">Log In</button>
      </div>
    </header>
  );
};

export default Header;
