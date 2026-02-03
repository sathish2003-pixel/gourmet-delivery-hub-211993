import React from 'react';
import './RestaurantModal.css';

// PUBLIC_INTERFACE
/**
 * Restaurant detail modal with menu items - Swiggy style with sections
 * @param {Object} props - Component props
 * @param {Object} props.restaurant - Restaurant data
 * @param {Array} props.menuItems - Menu items for the restaurant
 * @param {Function} props.onClose - Close modal handler
 * @param {Function} props.onAddToCart - Add to cart handler
 */
const RestaurantModal = ({ restaurant, menuItems, onClose, onAddToCart }) => {
  if (!restaurant) return null;

  // Group menu items by category
  const groupedItems = menuItems ? menuItems.reduce((acc, item) => {
    const category = item.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {}) : {};

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{restaurant.name}</h2>
          <p className="modal-cuisine">{restaurant.cuisine}</p>
          <p className="modal-description">{restaurant.description}</p>
          
          <div className="modal-meta">
            <div className="modal-rating modal-meta-item">
              <span className="meta-icon">★</span>
              <span>{restaurant.rating}</span>
            </div>
            <div className="modal-meta-item">
              <span className="meta-icon">🕒</span>
              <span>{restaurant.eta || restaurant.deliveryTime + ' mins'}</span>
            </div>
            <div className="modal-meta-item">
              <span className="meta-icon">💰</span>
              <span>{restaurant.priceForTwo || restaurant.priceRange}</span>
            </div>
            {restaurant.isVeg && (
              <div className="modal-meta-item">
                <span className="meta-icon">🌱</span>
                <span>Pure Veg</span>
              </div>
            )}
          </div>
        </div>

        <div className="modal-body">
          {Object.keys(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="menu-section">
                <h3 className="menu-section-title">{category}</h3>
                
                <div className="menu-items">
                  {items.map((item) => (
                    <div key={item.id} className="menu-item">
                      <div className="menu-item-details">
                        <div className="menu-item-header">
                          {item.isVeg && (
                            <span className="menu-item-veg" aria-label="Vegetarian"></span>
                          )}
                          <h4 className="menu-item-name">{item.name}</h4>
                        </div>
                        <p className="menu-item-price">₹{(item.price * 80).toFixed(0)}</p>
                        {item.description && (
                          <p className="menu-item-category">{item.description}</p>
                        )}
                      </div>

                      <div className="menu-item-image-container">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="menu-item-image"
                          loading="lazy"
                        />
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => onAddToCart(item)}
                          aria-label={`Add ${item.name} to cart`}
                        >
                          Add +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="no-menu-items">No menu items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
