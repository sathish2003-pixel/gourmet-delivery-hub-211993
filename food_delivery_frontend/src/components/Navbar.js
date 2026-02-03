import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
/**
 * Navigation bar component with search functionality and branding
 * @param {Object} props - Component props
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.onSearchChange - Search query change handler
 */
const Navbar = ({ searchQuery, onSearchChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-logo">
            <span className="logo-icon">🍔</span>
            <span className="brand-name">Gourmet Hub</span>
          </div>
          <div className="brand-tagline">Retro Food Delivery</div>
        </div>
        
        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants, cuisines, or dishes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search restaurants"
          />
          <button className="search-button" aria-label="Search">
            🔍
          </button>
        </div>

        <div className="navbar-actions">
          <button className="nav-button">
            <span className="button-icon">👤</span>
            <span className="button-text">Sign In</span>
          </button>
          <button className="nav-button nav-button-primary">
            <span className="button-icon">🛒</span>
            <span className="button-text">Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
