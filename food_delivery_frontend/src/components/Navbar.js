import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

// Inline SVG Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2L7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 2L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 6H23L21 20H3L1 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const OfferIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.59 13.41L21.17 12.83C22.34 11.66 22.34 9.75999 21.17 8.58999L15.41 2.83C14.24 1.66 12.34 1.66 11.17 2.83L10.59 3.41M3.41 10.59L2.83 11.17C1.66 12.34 1.66 14.24 1.66 15.41L7.42 21.17C8.59 22.34 10.49 22.34 11.66 21.17L12.24 20.59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.17 14.83L14.83 9.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor"/>
    <circle cx="18.5" cy="18.5" r="1.5" fill="currentColor"/>
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#fc8019"/>
    <path d="M24 12C18.48 12 14 16.48 14 22C14 25.52 16.02 28.61 19 30.26V36L24 33L29 36V30.26C31.98 28.61 34 25.52 34 22C34 16.48 29.52 12 24 12Z" fill="white"/>
    <circle cx="20" cy="21" r="2" fill="#fc8019"/>
    <circle cx="28" cy="21" r="2" fill="#fc8019"/>
    <path d="M24 28C25.66 28 27.07 27.19 27.87 26H20.13C20.93 27.19 22.34 28 24 28Z" fill="#fc8019"/>
  </svg>
);

// PUBLIC_INTERFACE
/**
 * Modern navigation bar component with polished icons, microinteractions, and accessibility
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

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen]);

  const totalItems = getTotalItems();

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div 
          className="navbar-brand" 
          onClick={() => navigate('/')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && navigate('/')}
          aria-label="GourmetHub Home"
        >
          <div className="brand-logo">
            <span className="logo-icon">
              <LogoIcon />
            </span>
            <span className="brand-name">GourmetHub</span>
          </div>
        </div>

        {/* Location Selector */}
        <button 
          className="location-selector"
          aria-label="Select location"
          aria-haspopup="true"
        >
          <span className="location-icon" aria-hidden="true">
            <LocationIcon />
          </span>
          <span className="location-text">Your Location</span>
          <span className="location-dropdown" aria-hidden="true">
            <ChevronDownIcon />
          </span>
        </button>
        
        {/* Search Bar - Only on home page */}
        {location.pathname === '/' && (
          <div className="navbar-search" role="search">
            <span className="search-icon" aria-hidden="true">
              <SearchIcon />
            </span>
            <input
              type="search"
              className="search-input"
              placeholder="Search for restaurants, cuisines, or dishes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search restaurants, cuisines, or dishes"
            />
          </div>
        )}

        {/* Navigation Actions */}
        <div className="navbar-actions">
          {/* Offers Button */}
          <button 
            className="nav-link nav-link-offers" 
            aria-label="View offers"
          >
            <span className="nav-link-icon" aria-hidden="true">
              <OfferIcon />
            </span>
            <span className="nav-link-text">Offers</span>
          </button>

          {/* Help Button */}
          <button 
            className="nav-link nav-link-help" 
            aria-label="Get help"
          >
            <span className="nav-link-icon" aria-hidden="true">
              <HelpIcon />
            </span>
            <span className="nav-link-text">Help</span>
          </button>

          {/* Sign In Button */}
          <button 
            className="nav-link nav-button-signin" 
            aria-label="Sign in to your account"
          >
            <span className="nav-link-icon" aria-hidden="true">
              <UserIcon />
            </span>
            <span className="nav-link-text">Sign In</span>
          </button>
          
          {/* Cart Button with Dropdown */}
          <div className="cart-wrapper" ref={cartDropdownRef}>
            <button 
              className="nav-link nav-button-cart" 
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label={`Shopping cart with ${totalItems} items`}
              aria-expanded={isCartOpen}
              aria-haspopup="true"
            >
              <span className="nav-link-icon" aria-hidden="true">
                <CartIcon />
              </span>
              <span className="nav-link-text">Cart</span>
              {totalItems > 0 && (
                <span className="cart-badge" aria-label={`${totalItems} items in cart`}>
                  {totalItems}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div 
                className="cart-dropdown" 
                role="dialog" 
                aria-label="Shopping cart"
                aria-modal="false"
              >
                {cartItems.length === 0 ? (
                  <div className="cart-empty">
                    <p className="cart-empty-icon" aria-hidden="true">🍽️</p>
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
                            <p className="cart-item-price-dropdown" aria-label={`Price: ${(item.price * 80).toFixed(0)} rupees`}>
                              ₹{(item.price * 80).toFixed(0)}
                            </p>
                          </div>

                          <div className="cart-item-actions-dropdown">
                            <div className="quantity-controls-dropdown" role="group" aria-label={`Quantity controls for ${item.name}`}>
                              <button
                                className="quantity-btn-dropdown"
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                −
                              </button>
                              <span className="quantity-value-dropdown" aria-label={`Quantity: ${item.quantity}`}>
                                {item.quantity}
                              </span>
                              <button
                                className="quantity-btn-dropdown"
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                +
                              </button>
                            </div>

                            <button
                              className="remove-btn-dropdown"
                              onClick={() => onRemoveItem(item.id)}
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cart-footer-dropdown">
                      <div className="cart-total-dropdown">
                        <span className="total-label-dropdown">Total:</span>
                        <span className="total-amount-dropdown" aria-label={`Total amount: ${(calculateTotal() * 80).toFixed(0)} rupees`}>
                          ₹{(calculateTotal() * 80).toFixed(0)}
                        </span>
                      </div>
                      <button 
                        className="checkout-btn-dropdown" 
                        onClick={() => {
                          onCheckout();
                          setIsCartOpen(false);
                        }}
                        aria-label="Proceed to checkout"
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
