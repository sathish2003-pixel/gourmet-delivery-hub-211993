import React from 'react';
import './RestaurantCard.css';

// PUBLIC_INTERFACE
/**
 * Restaurant card component displaying restaurant information
 * @param {Object} props - Component props
 * @param {Object} props.restaurant - Restaurant data
 * @param {Function} props.onClick - Click handler for card
 */
const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      {restaurant.promoted && (
        <div className="promoted-badge">⭐ Promoted</div>
      )}
      
      <div className="card-image-container">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="card-image"
          loading="lazy"
        />
        {restaurant.isVeg && (
          <span className="veg-badge">🌱</span>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{restaurant.name}</h3>
        <p className="card-cuisine">{restaurant.cuisine}</p>
        <p className="card-description">{restaurant.description}</p>

        <div className="card-meta">
          <div className="meta-item">
            <span className="meta-icon">⭐</span>
            <span className="meta-text">{restaurant.rating}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">🕒</span>
            <span className="meta-text">{restaurant.deliveryTime} min</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">💰</span>
            <span className="meta-text">{restaurant.priceRange}</span>
          </div>
        </div>

        <button className="card-button">
          View Menu →
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
