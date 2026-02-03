import React, { useState, useMemo } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import FilterSidebar from './components/FilterSidebar';
import RestaurantCard from './components/RestaurantCard';
import FloatingCart from './components/FloatingCart';
import RestaurantModal from './components/RestaurantModal';
import { restaurants, menuItems, promotionalBanners, cuisineTypes } from './data/mockData';

// PUBLIC_INTERFACE
/**
 * Main application component for the Gourmet Hub food delivery app
 * Manages state for search, filters, cart, and restaurant details
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
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // PUBLIC_INTERFACE
  /**
   * Filter and search restaurants based on current filters and search query
   */
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Cuisine filter
      const matchesCuisine = filters.cuisine === 'All' || restaurant.cuisine === filters.cuisine;

      // Rating filter
      const matchesRating = filters.rating === 0 || restaurant.rating >= filters.rating;

      // Delivery time filter
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

      // Price range filter
      const matchesPriceRange = filters.priceRange === 'All' || restaurant.priceRange === filters.priceRange;

      // Vegetarian filter
      const matchesVegOnly = !filters.vegOnly || restaurant.isVeg;

      return matchesSearch && matchesCuisine && matchesRating && matchesDeliveryTime && matchesPriceRange && matchesVegOnly;
    });
  }, [searchQuery, filters]);

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
   * Handle opening restaurant detail modal
   */
  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  // PUBLIC_INTERFACE
  /**
   * Handle closing restaurant detail modal
   */
  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="App">
      <Navbar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="main-content">
        <div className="content-container">
          <BannerCarousel banners={promotionalBanners} />

          <div className="layout-grid">
            <FilterSidebar 
              filters={filters}
              onFilterChange={setFilters}
              cuisineTypes={cuisineTypes}
            />

            <div className="restaurant-section">
              <div className="section-header">
                <h1 className="section-title">
                  {filteredRestaurants.length} Restaurants Available
                </h1>
                <p className="section-subtitle">
                  Choose from our selection of delicious restaurants
                </p>
              </div>

              <div className="restaurant-grid">
                {filteredRestaurants.map(restaurant => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onClick={() => handleRestaurantClick(restaurant)}
                  />
                ))}
              </div>

              {filteredRestaurants.length === 0 && (
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

      <FloatingCart
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      {selectedRestaurant && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          menuItems={menuItems[selectedRestaurant.id]}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
