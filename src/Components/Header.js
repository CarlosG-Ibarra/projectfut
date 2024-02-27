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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <button className="login-button">Log In</button>
    </header>
  );
};

export default Header;
