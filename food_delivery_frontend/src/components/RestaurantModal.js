import React from 'react';
import './RestaurantModal.css';

// PUBLIC_INTERFACE
/**
 * Restaurant detail modal with menu items
 * @param {Object} props - Component props
 * @param {Object} props.restaurant - Restaurant data
 * @param {Array} props.menuItems - Menu items for the restaurant
 * @param {Function} props.onClose - Close modal handler
 * @param {Function} props.onAddToCart - Add to cart handler
 */
const RestaurantModal = ({ restaurant, menuItems, onClose, onAddToCart }) => {
  if (!restaurant) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="modal-header-image"
          />
          <div className="modal-header-content">
            <h2 className="modal-title">{restaurant.name}</h2>
            <p className="modal-cuisine">{restaurant.cuisine}</p>
            <p className="modal-description">{restaurant.description}</p>
            
            <div className="modal-meta">
              <div className="modal-meta-item">
                <span className="meta-icon">⭐</span>
                <span>{restaurant.rating}</span>
              </div>
              <div className="modal-meta-item">
                <span className="meta-icon">🕒</span>
                <span>{restaurant.deliveryTime} min</span>
              </div>
              <div className="modal-meta-item">
                <span className="meta-icon">💰</span>
                <span>{restaurant.priceRange}</span>
              </div>
              {restaurant.isVeg && (
                <div className="modal-meta-item">
                  <span className="meta-icon">🌱</span>
                  <span>Vegetarian</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h3 className="menu-title">📋 Menu</h3>
          
          <div className="menu-items">
            {menuItems && menuItems.length > 0 ? (
              menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="menu-item-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="menu-item-image"
                      loading="lazy"
                    />
                    {item.isVeg && (
                      <span className="menu-item-veg">🌱</span>
                    )}
                  </div>

                  <div className="menu-item-details">
                    <div className="menu-item-info">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <p className="menu-item-category">{item.category}</p>
                    </div>
                    
                    <div className="menu-item-actions">
                      <span className="menu-item-price">${item.price.toFixed(2)}</span>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(item)}
                        aria-label={`Add ${item.name} to cart`}
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-menu-items">No menu items available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
