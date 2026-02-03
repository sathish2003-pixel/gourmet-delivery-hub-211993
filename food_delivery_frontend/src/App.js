import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import FilterChips from './components/FilterChips';
import FilterSidebar from './components/FilterSidebar';
import RestaurantCard from './components/RestaurantCard';
import RestaurantDetails from './pages/RestaurantDetails';
import SegmentedControl from './components/SegmentedControl';
import { restaurants, menuItems, promotionalBanners, cuisineTypes } from './data/mockData';

// PUBLIC_INTERFACE
/**
 * Main application component with React Router navigation
 * Manages state for search, filters, sorting, and cart
 */
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    cuisine: 'All',
    rating: 0,
    deliveryTime: 'All',
    priceRange: 'All',
    vegOnly: false,
    vegFilter: 'all', // 'veg', 'all', 'non-veg'
    ratingFilter: 'all', // 'all', '4.0+', '4.5+'
    deliveryFeeFilter: 'all' // 'all', 'low'
  });
  const [sortBy, setSortBy] = useState('fastest');
  const [cartItems, setCartItems] = useState([]);

  // PUBLIC_INTERFACE
  /**
   * Handle adding item to cart
   */
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // PUBLIC_INTERFACE
  /**
   * Handle removing item from cart
   */
  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // PUBLIC_INTERFACE
  /**
   * Handle updating item quantity in cart
   */
  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // PUBLIC_INTERFACE
  /**
   * Handle checkout
   */
  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  // PUBLIC_INTERFACE
  /**
   * Filter and sort restaurants based on current filters, search query, and sort option
   */
  const getFilteredRestaurants = () => {
    const filtered = restaurants.filter(restaurant => {
      const matchesSearch = searchQuery === '' || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCuisine = filters.cuisine === 'All' || restaurant.cuisine.includes(filters.cuisine);
      const matchesRating = filters.rating === 0 || restaurant.rating >= filters.rating;

      let matchesDeliveryTime = true;
      if (filters.deliveryTime !== 'All') {
        const deliveryMin = parseInt(restaurant.deliveryTime.split('-')[0]);
        if (filters.deliveryTime === 'Fast (< 30 min)') {
          matchesDeliveryTime = deliveryMin < 30;
        } else if (filters.deliveryTime === 'Medium (30-40 min)') {
          matchesDeliveryTime = deliveryMin >= 30 && deliveryMin <= 40;
        } else if (filters.deliveryTime === 'Standard (> 40 min)') {
          matchesDeliveryTime = deliveryMin > 40;
        }
      }

      const matchesPriceRange = filters.priceRange === 'All' || restaurant.priceRange === filters.priceRange;
      const matchesVegOnly = !filters.vegOnly || restaurant.isVeg;

      // New segmented control filters
      let matchesVegFilter = true;
      if (filters.vegFilter === 'veg') {
        matchesVegFilter = restaurant.isVeg === true;
      } else if (filters.vegFilter === 'non-veg') {
        matchesVegFilter = restaurant.isVeg === false;
      }

      let matchesRatingFilter = true;
      if (filters.ratingFilter === '4.0+') {
        matchesRatingFilter = restaurant.rating >= 4.0;
      } else if (filters.ratingFilter === '4.5+') {
        matchesRatingFilter = restaurant.rating >= 4.5;
      }

      let matchesDeliveryFeeFilter = true;
      if (filters.deliveryFeeFilter === 'low') {
        // Assuming low delivery fee is based on price range or could be a separate field
        // For now, using priceRange as proxy ($ = low fee)
        matchesDeliveryFeeFilter = restaurant.priceRange === '$' || restaurant.deliveryFee === 'Free';
      }

      return matchesSearch && matchesCuisine && matchesRating && matchesDeliveryTime && 
             matchesPriceRange && matchesVegOnly && matchesVegFilter && matchesRatingFilter && 
             matchesDeliveryFeeFilter;
    });

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case 'fastest':
        sorted.sort((a, b) => {
          const aTime = parseInt(a.deliveryTime.split('-')[0]);
          const bTime = parseInt(b.deliveryTime.split('-')[0]);
          return aTime - bTime;
        });
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        sorted.sort((a, b) => {
          const priceOrder = { '$': 1, '$$': 2, '$$$': 3 };
          return (priceOrder[a.priceRange] || 2) - (priceOrder[b.priceRange] || 2);
        });
        break;
      case 'price-high':
        sorted.sort((a, b) => {
          const priceOrder = { '$': 1, '$$': 2, '$$$': 3 };
          return (priceOrder[b.priceRange] || 2) - (priceOrder[a.priceRange] || 2);
        });
        break;
      default:
        break;
    }

    return sorted;
  };
  
  const sortOptions = [
    { value: 'fastest', label: 'Fastest' },
    { value: 'rating', label: 'Rating' },
    { value: 'price-low', label: 'Price ↑' },
    { value: 'price-high', label: 'Price ↓' },
  ];

  const vegFilterOptions = [
    { value: 'veg', label: 'Veg' },
    { value: 'all', label: 'All' },
    { value: 'non-veg', label: 'Non-Veg' },
  ];

  const ratingFilterOptions = [
    { value: 'all', label: 'All' },
    { value: '4.0+', label: '4.0+' },
    { value: '4.5+', label: '4.5+' },
  ];

  const deliveryFeeFilterOptions = [
    { value: 'all', label: 'All' },
    { value: 'low', label: 'Low' },
  ];

  // Handlers for segmented controls
  const handleVegFilterChange = (value) => {
    setFilters({ ...filters, vegFilter: value });
  };

  const handleRatingFilterChange = (value) => {
    setFilters({ ...filters, ratingFilter: value });
  };

  const handleDeliveryFeeFilterChange = (value) => {
    setFilters({ ...filters, deliveryFeeFilter: value });
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cartItems={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />

        <Routes>
          {/* Home Page Route */}
          <Route 
            path="/" 
            element={
              <main className="main-content">
                <div className="content-container">
                  <BannerCarousel banners={promotionalBanners} />

                  <FilterChips 
                    filters={filters}
                    onFilterChange={setFilters}
                  />

                  <div className="layout-grid">
                    <div className="filter-sidebar-container">
                      <FilterSidebar 
                        filters={filters}
                        onFilterChange={setFilters}
                        cuisineTypes={cuisineTypes}
                      />
                    </div>

                    <div className="restaurant-section">
                      <div className="section-header">
                        <div className="section-header-text">
                          <h1 className="section-title">
                            {getFilteredRestaurants().length} restaurants
                          </h1>
                          <p className="section-subtitle">
                            delivering to your location
                          </p>
                        </div>
                        <div className="section-header-controls">
                          <div className="section-header-filters">
                            <div className="filter-control-group">
                              <span className="filter-control-label">Type:</span>
                              <SegmentedControl
                                options={vegFilterOptions}
                                value={filters.vegFilter}
                                onChange={handleVegFilterChange}
                                ariaLabel="Filter by food type"
                              />
                            </div>
                            <div className="filter-control-group">
                              <span className="filter-control-label">Rating:</span>
                              <SegmentedControl
                                options={ratingFilterOptions}
                                value={filters.ratingFilter}
                                onChange={handleRatingFilterChange}
                                ariaLabel="Filter by rating"
                              />
                            </div>
                            <div className="filter-control-group">
                              <span className="filter-control-label">Delivery:</span>
                              <SegmentedControl
                                options={deliveryFeeFilterOptions}
                                value={filters.deliveryFeeFilter}
                                onChange={handleDeliveryFeeFilterChange}
                                ariaLabel="Filter by delivery fee"
                              />
                            </div>
                          </div>
                          <div className="section-header-sort">
                            <span className="sort-label-main">Sort:</span>
                            <SegmentedControl
                              options={sortOptions}
                              value={sortBy}
                              onChange={setSortBy}
                              ariaLabel="Sort restaurants"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="restaurant-grid">
                        {getFilteredRestaurants().map(restaurant => (
                          <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                            onClick={() => window.location.href = `/restaurant/${restaurant.id}`}
                          />
                        ))}
                      </div>

                      {getFilteredRestaurants().length === 0 && (
                        <div className="no-results">
                          <p className="no-results-icon">🔍</p>
                          <h3 className="no-results-title">No restaurants found</h3>
                          <p className="no-results-text">
                            Try adjusting your filters or search query
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </main>
            } 
          />

          {/* Restaurant Details Page Route */}
          <Route 
            path="/restaurant/:id" 
            element={
              <RestaurantDetails
                restaurants={restaurants}
                menuItems={menuItems}
                onAddToCart={handleAddToCart}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
