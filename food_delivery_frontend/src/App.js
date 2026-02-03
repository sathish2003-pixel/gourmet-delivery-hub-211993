import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import FilterChips from './components/FilterChips';
import FilterSidebar from './components/FilterSidebar';
import RestaurantCard from './components/RestaurantCard';
import RestaurantDetails from './pages/RestaurantDetails';
import { restaurants, menuItems, promotionalBanners, cuisineTypes } from './data/mockData';

// PUBLIC_INTERFACE
/**
 * Main application component with React Router navigation
 * Manages state for search, filters, and cart
 */
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    cuisine: 'All',
    rating: 0,
    deliveryTime: 'All',
    priceRange: 'All',
    vegOnly: false
  });
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
   * Filter restaurants based on current filters and search query
   */
  const getFilteredRestaurants = () => {
    return restaurants.filter(restaurant => {
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

      return matchesSearch && matchesCuisine && matchesRating && matchesDeliveryTime && matchesPriceRange && matchesVegOnly;
    });
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
                        <h1 className="section-title">
                          {getFilteredRestaurants().length} restaurants
                        </h1>
                        <p className="section-subtitle">
                          delivering to your location
                        </p>
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
