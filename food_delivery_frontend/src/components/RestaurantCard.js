import React from 'react';
import './RestaurantCard.css';

// PUBLIC_INTERFACE
/**
 * Restaurant card component - Swiggy style with rating badges and offer ribbons
 * @param {Object} props - Component props
 * @param {Object} props.restaurant - Restaurant data
 * @param {Function} props.onClick - Click handler for card
 */
const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      {restaurant.offerText && (
        <div className="offer-ribbon">
          {restaurant.offerText}
        </div>
      )}
      
      <div className="card-image-container">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="card-image"
          loading="lazy"
        />
        {restaurant.isVeg && (
          <span className="veg-badge" aria-label="Vegetarian"></span>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{restaurant.name}</h3>
        <p className="card-cuisine">{restaurant.cuisine}</p>
        <p className="card-description">{restaurant.description}</p>

        <div className="card-meta">
          <div className="meta-left">
            <div className="rating-badge">
              <span className="rating-star">★</span>
              <span>{restaurant.rating}</span>
            </div>
            <div className="delivery-time">
              <span>🕒</span>
              <span>{restaurant.eta || restaurant.deliveryTime + ' mins'}</span>
            </div>
          </div>
          <div className="meta-right">
            <span className="price-for-two">{restaurant.priceForTwo || restaurant.priceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
