// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HeaderFooter.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home"><span>Huko</span></Link>
      </div>
      <nav>
            <div className="center-links">
              <ul>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/series">Series</a></li>
              </ul>
            </div>
            <ul>
              <li><a href="/signin">Sign In</a></li>
            </ul>
          </nav>
    </header>
  );
};

export default Header;
