import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetails.css';

// PUBLIC_INTERFACE
/**
 * Restaurant details page with modern UI, category tabs, and dish cards
 * @param {Object} props - Component props
 * @param {Array} props.restaurants - List of all restaurants
 * @param {Object} props.menuItems - Menu items grouped by restaurant ID
 * @param {Function} props.onAddToCart - Add to cart handler
 * @param {Array} props.cartItems - Current cart items
 * @param {Function} props.onUpdateQuantity - Update quantity handler
 */
const RestaurantDetails = ({ restaurants, menuItems, onAddToCart, cartItems, onUpdateQuantity }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const menu = menuItems[parseInt(id)] || [];

  if (!restaurant) {
    return (
      <div className="restaurant-details-error">
        <h2>Restaurant not found</h2>
        <button onClick={() => navigate('/')} className="back-home-btn">
          Go Back Home
        </button>
      </div>
    );
  }

  // Get unique categories
  const categories = ['All', ...new Set(menu.map(item => item.category))];

  // Filter menu by category
  const filteredMenu = activeCategory === 'All' 
    ? menu 
    : menu.filter(item => item.category === activeCategory);

  // Get quantity for an item in cart
  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="restaurant-details-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Restaurants
      </button>

      {/* Cover Image Section */}
      <div className="restaurant-cover">
        <img src={restaurant.image} alt={restaurant.name} className="cover-image" />
        <div className="cover-overlay"></div>
      </div>

      {/* Restaurant Header */}
      <div className="restaurant-header">
        <div className="header-content">
          <div className="header-main">
            <h1 className="restaurant-name">{restaurant.name}</h1>
            <p className="restaurant-cuisine">{restaurant.cuisine}</p>
            <p className="restaurant-description">{restaurant.description}</p>
          </div>

          <div className="header-badges">
            <div className="badge badge-rating">
              <span className="badge-icon">⭐</span>
              <div className="badge-content">
                <span className="badge-value">{restaurant.rating}</span>
                <span className="badge-label">Rating</span>
              </div>
            </div>

            <div className="badge badge-time">
              <span className="badge-icon">🕒</span>
              <div className="badge-content">
                <span className="badge-value">{restaurant.eta || restaurant.deliveryTime + ' mins'}</span>
                <span className="badge-label">Delivery Time</span>
              </div>
            </div>

            <div className="badge badge-price">
              <span className="badge-icon">💰</span>
              <div className="badge-content">
                <span className="badge-value">{restaurant.priceForTwo || restaurant.priceRange}</span>
                <span className="badge-label">For Two</span>
              </div>
            </div>
          </div>

          {restaurant.offerText && (
            <div className="offer-banner">
              🏷️ {restaurant.offerText}
            </div>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs-sticky">
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="menu-container">
        <div className="menu-grid">
          {filteredMenu.map(item => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={item.id} className="dish-card">
                <div className="dish-image-container">
                  <img src={item.image} alt={item.name} className="dish-image" />
                  {item.isVeg && (
                    <span className="dish-veg-badge" aria-label="Vegetarian"></span>
                  )}
                </div>

                <div className="dish-content">
                  <h3 className="dish-name">{item.name}</h3>
                  {item.description && (
                    <p className="dish-description">{item.description}</p>
                  )}
                  <div className="dish-footer">
                    <span className="dish-price">₹{(item.price * 80).toFixed(0)}</span>
                    
                    {quantity === 0 ? (
                      <button 
                        className="dish-add-btn"
                        onClick={() => onAddToCart(item)}
                      >
                        Add +
                      </button>
                    ) : (
                      <div className="dish-quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                        >
                          −
                        </button>
                        <span className="quantity-value">{quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMenu.length === 0 && (
          <div className="no-items">
            <p className="no-items-icon">🍽️</p>
            <p className="no-items-text">No items in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
