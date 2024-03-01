import React from 'react';
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Ligue 1</a></li>
        <li><a href="#">Bundesliga</a></li>
        <li><a href="#">La Liga</a></li>
        <li><a href="#">Serie A</a></li>
        <li><a href="/PremierLeague">Premier League</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
