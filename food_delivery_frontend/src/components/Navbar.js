import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
/**
 * Navigation bar component - Swiggy style with location selector
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
            <span className="brand-name">GourmetHub</span>
          </div>
        </div>

        <div className="location-selector">
          <span role="img" aria-label="location">📍</span>
          <span className="location-text">Your Location</span>
          <span role="img" aria-label="dropdown">▼</span>
        </div>
        
        <div className="navbar-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants, cuisines, or dishes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search restaurants"
          />
        </div>

        <div className="navbar-actions">
          <button className="nav-link">
            <span className="nav-link-icon">💼</span>
            <span className="nav-link-text">Offers</span>
          </button>
          <button className="nav-link">
            <span className="nav-link-icon">❓</span>
            <span className="nav-link-text">Help</span>
          </button>
          <button className="nav-link nav-button-signin">
            <span className="nav-link-icon">👤</span>
            <span className="nav-link-text">Sign In</span>
          </button>
          <button className="nav-link nav-button-cart">
            <span className="nav-link-icon">🛒</span>
            <span className="nav-link-text">Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
