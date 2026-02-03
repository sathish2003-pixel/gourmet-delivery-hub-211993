import React from 'react';
import './FilterSidebar.css';

// PUBLIC_INTERFACE
/**
 * Advanced filtering sidebar for restaurants
 * @param {Object} props - Component props
 * @param {Object} props.filters - Current filter state
 * @param {Function} props.onFilterChange - Filter change handler
 * @param {Array} props.cuisineTypes - Available cuisine types
 */
const FilterSidebar = ({ filters, onFilterChange, cuisineTypes }) => {
  // PUBLIC_INTERFACE
  const handleCuisineChange = (cuisine) => {
    onFilterChange({ ...filters, cuisine });
  };

  // PUBLIC_INTERFACE
  const handleRatingChange = (rating) => {
    onFilterChange({ ...filters, rating });
  };

  // PUBLIC_INTERFACE
  const handleDeliveryTimeChange = (deliveryTime) => {
    onFilterChange({ ...filters, deliveryTime });
  };

  // PUBLIC_INTERFACE
  const handlePriceRangeChange = (priceRange) => {
    onFilterChange({ ...filters, priceRange });
  };

  // PUBLIC_INTERFACE
  const handleVegOnlyChange = (vegOnly) => {
    onFilterChange({ ...filters, vegOnly });
  };

  // PUBLIC_INTERFACE
  const clearFilters = () => {
    onFilterChange({
      cuisine: 'All',
      rating: 0,
      deliveryTime: 'All',
      priceRange: 'All',
      vegOnly: false
    });
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h2 className="filter-title">🎯 Filters</h2>
        <button className="clear-filters" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Cuisine Type</h3>
        <div className="filter-options">
          {cuisineTypes.map((cuisine) => (
            <button
              key={cuisine}
              className={`filter-chip ${filters.cuisine === cuisine ? 'active' : ''}`}
              onClick={() => handleCuisineChange(cuisine)}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Rating</h3>
        <div className="filter-options">
          {[4.5, 4.0, 3.5, 0].map((rating) => (
            <button
              key={rating}
              className={`filter-chip ${filters.rating === rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(rating)}
            >
              {rating === 0 ? 'All' : `${rating}+ ⭐`}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Delivery Time</h3>
        <div className="filter-options">
          {['All', 'Fast (< 30 min)', 'Medium (30-40 min)', 'Standard (> 40 min)'].map((time) => (
            <button
              key={time}
              className={`filter-chip ${filters.deliveryTime === time ? 'active' : ''}`}
              onClick={() => handleDeliveryTimeChange(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Price Range</h3>
        <div className="filter-options">
          {['All', '$', '$$', '$$$'].map((price) => (
            <button
              key={price}
              className={`filter-chip ${filters.priceRange === price ? 'active' : ''}`}
              onClick={() => handlePriceRangeChange(price)}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Dietary</h3>
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.vegOnly}
            onChange={(e) => handleVegOnlyChange(e.target.checked)}
          />
          <span className="checkbox-label">🌱 Vegetarian Only</span>
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
