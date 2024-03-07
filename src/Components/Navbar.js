import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="Ligue1">Ligue 1</a></li>
        <li><a href="Bundesliga">Bundesliga</a></li>
        <li><a href="LaLiga">La Liga</a></li>
        <li><a href="/SerieA">Serie A</a></li>
        <li><a href="/PremierLeague">Premier League</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
