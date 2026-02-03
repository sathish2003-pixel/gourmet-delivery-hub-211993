import React from 'react';
import './FilterChips.css';

// PUBLIC_INTERFACE
/**
 * Horizontal filter chips component - Swiggy style
 * @param {Object} props - Component props
 * @param {Object} props.filters - Current filter state
 * @param {Function} props.onFilterChange - Filter change handler
 */
const FilterChips = ({ filters, onFilterChange }) => {
  const quickFilters = [
    { id: 'sortBy', label: 'Sort by', icon: '⇅', type: 'action' },
    { 
      id: 'fastDelivery', 
      label: 'Fast Delivery', 
      icon: '⚡',
      active: filters.deliveryTime === 'Fast (< 30 min)'
    },
    { 
      id: 'rating4Plus', 
      label: 'Ratings 4.0+', 
      icon: '⭐',
      active: filters.rating === 4.0
    },
    { 
      id: 'pureVeg', 
      label: 'Pure Veg', 
      icon: '🌱',
      active: filters.vegOnly
    },
    { id: 'offers', label: 'Offers', icon: '🏷️', type: 'info' },
    { 
      id: 'price', 
      label: 'Price: ' + (filters.priceRange === 'All' ? 'Any' : filters.priceRange), 
      icon: '💰',
      active: filters.priceRange !== 'All'
    },
  ];

  // PUBLIC_INTERFACE
  const handleChipClick = (filterId) => {
    switch (filterId) {
      case 'fastDelivery':
        onFilterChange({
          ...filters,
          deliveryTime: filters.deliveryTime === 'Fast (< 30 min)' ? 'All' : 'Fast (< 30 min)'
        });
        break;
      case 'rating4Plus':
        onFilterChange({
          ...filters,
          rating: filters.rating === 4.0 ? 0 : 4.0
        });
        break;
      case 'pureVeg':
        onFilterChange({
          ...filters,
          vegOnly: !filters.vegOnly
        });
        break;
      case 'price':
        // Cycle through price ranges
        const priceRanges = ['All', '$', '$$', '$$$'];
        const currentIndex = priceRanges.indexOf(filters.priceRange);
        const nextIndex = (currentIndex + 1) % priceRanges.length;
        onFilterChange({
          ...filters,
          priceRange: priceRanges[nextIndex]
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="filter-chips-container">
      <div className="filter-chips-scroll">
        {quickFilters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-chip-item ${filter.active ? 'active' : ''}`}
            onClick={() => handleChipClick(filter.id)}
            disabled={filter.type === 'action' || filter.type === 'info'}
            style={{
              cursor: filter.type === 'action' || filter.type === 'info' ? 'default' : 'pointer',
              opacity: filter.type === 'info' ? 0.6 : 1
            }}
          >
            <span className="filter-chip-icon">{filter.icon}</span>
            <span>{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterChips;
