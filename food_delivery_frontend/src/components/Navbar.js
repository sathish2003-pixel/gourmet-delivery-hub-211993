import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

// PUBLIC_INTERFACE
/**
 * Modern navigation bar component with cart dropdown
 * @param {Object} props - Component props
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.onSearchChange - Search query change handler
 * @param {Array} props.cartItems - Current cart items
 * @param {Function} props.onRemoveItem - Remove item handler
 * @param {Function} props.onUpdateQuantity - Update quantity handler
 * @param {Function} props.onCheckout - Checkout handler
 */
const Navbar = ({ searchQuery, onSearchChange, cartItems = [], onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // PUBLIC_INTERFACE
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // PUBLIC_INTERFACE
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Close cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <div className="brand-logo">
            <span className="logo-icon">🍔</span>
            <span className="brand-name">GourmetHub</span>
          </div>
        </div>

        <div className="location-selector">
          <span role="img" aria-label="location" className="location-icon">📍</span>
          <span className="location-text">Your Location</span>
          <span role="img" aria-label="dropdown" className="location-dropdown">▼</span>
        </div>
        
        {location.pathname === '/' && (
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
        )}

        <div className="navbar-actions">
          <button className="nav-link" title="Offers">
            <span className="nav-link-icon">💼</span>
            <span className="nav-link-text">Offers</span>
          </button>
          <button className="nav-link" title="Help">
            <span className="nav-link-icon">❓</span>
            <span className="nav-link-text">Help</span>
          </button>
          <button className="nav-link nav-button-signin" title="Sign In">
            <span className="nav-link-icon">👤</span>
            <span className="nav-link-text">Sign In</span>
          </button>
          
          {/* Cart Button with Dropdown */}
          <div className="cart-wrapper" ref={cartDropdownRef}>
            <button 
              className="nav-link nav-button-cart" 
              onClick={() => setIsCartOpen(!isCartOpen)}
              title="Cart"
            >
              <span className="nav-link-icon">🛒</span>
              <span className="nav-link-text">Cart</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="cart-dropdown">
                {cartItems.length === 0 ? (
                  <div className="cart-empty">
                    <p className="cart-empty-icon">🍽️</p>
                    <p className="cart-empty-text">Your cart is empty</p>
                    <p className="cart-empty-subtext">Add items to get started</p>
                  </div>
                ) : (
                  <>
                    <div className="cart-header-dropdown">
                      <h3 className="cart-title-dropdown">Your Cart ({totalItems} items)</h3>
                    </div>
                    
                    <div className="cart-items-dropdown">
                      {cartItems.map((item) => (
                        <div key={item.id} className="cart-item-dropdown">
                          <div className="cart-item-info-dropdown">
                            <h4 className="cart-item-name-dropdown">{item.name}</h4>
                            <p className="cart-item-price-dropdown">₹{(item.price * 80).toFixed(0)}</p>
                          </div>

                          <div className="cart-item-actions-dropdown">
                            <div className="quantity-controls-dropdown">
                              <button
                                className="quantity-btn-dropdown"
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="quantity-value-dropdown">{item.quantity}</span>
                              <button
                                className="quantity-btn-dropdown"
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            <button
                              className="remove-btn-dropdown"
                              onClick={() => onRemoveItem(item.id)}
                              aria-label="Remove item"
                              title="Remove"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cart-footer-dropdown">
                      <div className="cart-total-dropdown">
                        <span className="total-label-dropdown">Total:</span>
                        <span className="total-amount-dropdown">₹{(calculateTotal() * 80).toFixed(0)}</span>
                      </div>
                      <button 
                        className="checkout-btn-dropdown" 
                        onClick={() => {
                          onCheckout();
                          setIsCartOpen(false);
                        }}
                      >
                        Checkout →
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
