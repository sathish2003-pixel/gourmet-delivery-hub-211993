import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetails.css';
import SegmentedControl from '../components/SegmentedControl';

// PUBLIC_INTERFACE
/**
 * Restaurant details page with modern UI, sticky category tabs, scroll-based section highlighting,
 * skeleton loaders, collapsible sections, iOS-style sorting, and improved accessibility
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
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [sortBy, setSortBy] = useState('fastest');
  const [vegFilter, setVegFilter] = useState('all'); // 'veg', 'all', 'non-veg'
  const [pureVegFilter, setPureVegFilter] = useState('all'); // 'all', 'pure-veg'
  const [offersFilter, setOffersFilter] = useState('all'); // 'all', 'offers'
  
  const sectionRefs = useRef({});
  const observerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const menu = menuItems[parseInt(id)] || [];

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  // Get unique categories with item counts
  const getCategoriesWithCounts = () => {
    const categoryCounts = menu.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const categories = [
      { name: 'All', count: menu.length },
      ...Object.keys(categoryCounts).map(category => ({
        name: category,
        count: categoryCounts[category]
      }))
    ];

    return categories;
  };

  const categories = getCategoriesWithCounts();

  // Sort and filter menu items based on selected options
  const sortAndFilterMenuItems = (items) => {
    // First, apply veg filter
    let filteredItems = [...items];
    if (vegFilter === 'veg') {
      filteredItems = filteredItems.filter(item => item.isVeg === true);
    } else if (vegFilter === 'non-veg') {
      filteredItems = filteredItems.filter(item => item.isVeg === false);
    }
    
    // Apply pure veg filter
    if (pureVegFilter === 'pure-veg') {
      filteredItems = filteredItems.filter(item => item.isVeg === true);
    }
    
    // Apply offers filter
    if (offersFilter === 'offers') {
      filteredItems = filteredItems.filter(item => item.hasOffer === true);
    }
    
    // Then sort
    switch (sortBy) {
      case 'fastest':
        // Sort by availability/popularity (simulated - in real app would use delivery time)
        return filteredItems;
      case 'rating':
        // Sort by rating (simulated - would use actual item ratings)
        return filteredItems.sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
      case 'price-low':
        return filteredItems.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filteredItems.sort((a, b) => b.price - a.price);
      default:
        return filteredItems;
    }
  };

  // Group menu items by category
  const getMenuByCategory = () => {
    if (activeCategory === 'All') {
      const grouped = menu.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
      
      // Apply sorting and filtering to each category
      Object.keys(grouped).forEach(category => {
        grouped[category] = sortAndFilterMenuItems(grouped[category]);
      });
      
      return grouped;
    } else {
      const filteredItems = menu.filter(item => item.category === activeCategory);
      return { [activeCategory]: sortAndFilterMenuItems(filteredItems) };
    }
  };

  const menuByCategory = getMenuByCategory();
  
  // Sort options for segmented control
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

  const pureVegFilterOptions = [
    { value: 'all', label: 'All' },
    { value: 'pure-veg', label: 'Pure Veg' },
  ];

  const offersFilterOptions = [
    { value: 'all', label: 'All' },
    { value: 'offers', label: 'Offers' },
  ];

  // Initialize expanded sections on first load (top 1-2 sections expanded by default)
  useEffect(() => {
    if (!isLoading && Object.keys(menuByCategory).length > 0 && Object.keys(expandedSections).length === 0) {
      const categoryKeys = Object.keys(menuByCategory);
      const initialExpanded = {};
      // Expand first 2 sections by default
      categoryKeys.slice(0, 2).forEach(key => {
        initialExpanded[key] = true;
      });
      setExpandedSections(initialExpanded);
    }
  }, [isLoading]);

  // Toggle section expand/collapse
  const toggleSection = (categoryName) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Setup Intersection Observer for scroll-based section highlighting
  useEffect(() => {
    if (isLoading || Object.keys(menuByCategory).length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (isScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const categoryName = entry.target.dataset.category;
          if (categoryName) {
            setActiveCategory(categoryName === 'All-section' ? 'All' : categoryName);
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading, menuByCategory, isScrolling]);

  // Handle smooth scroll to section
  const scrollToSection = (categoryName) => {
    setIsScrolling(true);
    setActiveCategory(categoryName);

    const sectionKey = categoryName === 'All' ? 'All-section' : categoryName;
    
    // Expand the section if it's collapsed
    if (!expandedSections[sectionKey]) {
      setExpandedSections(prev => ({
        ...prev,
        [sectionKey]: true
      }));
    }

    // Wait a tick for expansion animation to start before scrolling
    setTimeout(() => {
      const section = sectionRefs.current[sectionKey];
      
      if (section) {
        const offset = 200; // Account for sticky header + sticky tabs + sort control
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);

    // Reset scrolling flag after scroll completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Get quantity for an item in cart
  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

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

  return (
    <div className="restaurant-details-page">
      {/* Back Button */}
      <button 
        className="back-button" 
        onClick={() => navigate('/')}
        aria-label="Go back to restaurant list"
      >
        ← Back to Restaurants
      </button>

      {/* Cover Image Section with Skeleton */}
      <div className="restaurant-cover">
        {isLoading ? (
          <div className="skeleton-cover" aria-label="Loading restaurant image"></div>
        ) : (
          <>
            <img src={restaurant.image} alt={restaurant.name} className="cover-image" />
            <div className="cover-overlay"></div>
          </>
        )}
      </div>

      {/* Restaurant Header with Skeleton */}
      <div className="restaurant-header">
        <div className="header-content">
          {isLoading ? (
            <>
              <div className="skeleton-header">
                <div className="skeleton-title"></div>
                <div className="skeleton-subtitle"></div>
                <div className="skeleton-description"></div>
              </div>
              <div className="skeleton-badges">
                <div className="skeleton-badge"></div>
                <div className="skeleton-badge"></div>
                <div className="skeleton-badge"></div>
              </div>
            </>
          ) : (
            <>
              <div className="header-main">
                <h1 className="restaurant-name">{restaurant.name}</h1>
                <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                <p className="restaurant-description">{restaurant.description}</p>
              </div>

              <div className="header-badges">
                <div className="badge badge-rating" role="status" aria-label={`Rating ${restaurant.rating} stars`}>
                  <span className="badge-icon" aria-hidden="true">⭐</span>
                  <div className="badge-content">
                    <span className="badge-value">{restaurant.rating}</span>
                    <span className="badge-label">Rating</span>
                  </div>
                </div>

                <div className="badge badge-time" role="status" aria-label={`Delivery time ${restaurant.deliveryTime} minutes`}>
                  <span className="badge-icon" aria-hidden="true">🕒</span>
                  <div className="badge-content">
                    <span className="badge-value">{restaurant.eta || restaurant.deliveryTime + ' mins'}</span>
                    <span className="badge-label">Delivery Time</span>
                  </div>
                </div>

                <div className="badge badge-price" role="status" aria-label={`Price for two ${restaurant.priceForTwo || restaurant.priceRange}`}>
                  <span className="badge-icon" aria-hidden="true">💰</span>
                  <div className="badge-content">
                    <span className="badge-value">{restaurant.priceForTwo || restaurant.priceRange}</span>
                    <span className="badge-label">For Two</span>
                  </div>
                </div>
              </div>

              {restaurant.offerText && (
                <div className="offer-banner" role="status" aria-live="polite">
                  🏷️ {restaurant.offerText}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Category Tabs - Sticky */}
      <div className="category-tabs-sticky" role="navigation" aria-label="Menu categories">
        <div className="category-tabs">
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="skeleton-tab"></div>
              ))}
            </>
          ) : (
            categories.map(category => (
              <button
                key={category.name}
                className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => scrollToSection(category.name)}
                aria-label={`View ${category.name} menu items, ${category.count} items`}
                aria-current={activeCategory === category.name ? 'true' : 'false'}
              >
                {category.name}
                <span className="category-count">{category.count}</span>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Filter and Sort Controls - iOS Style */}
      {!isLoading && (
        <div className="sort-control-container">
          <div className="sort-control-wrapper">
            <div className="filter-control-group-details">
              <span className="sort-label">Type:</span>
              <SegmentedControl
                options={vegFilterOptions}
                value={vegFilter}
                onChange={setVegFilter}
                ariaLabel="Filter by food type"
              />
            </div>
            <div className="sort-control-divider"></div>
            <div className="filter-control-group-details">
              <span className="sort-label">Pure Veg:</span>
              <SegmentedControl
                options={pureVegFilterOptions}
                value={pureVegFilter}
                onChange={setPureVegFilter}
                ariaLabel="Filter by pure veg only"
              />
            </div>
            <div className="sort-control-divider"></div>
            <div className="filter-control-group-details">
              <span className="sort-label">Offers:</span>
              <SegmentedControl
                options={offersFilterOptions}
                value={offersFilter}
                onChange={setOffersFilter}
                ariaLabel="Filter by offers"
              />
            </div>
            <div className="sort-control-divider"></div>
            <div className="sort-control-group-details">
              <span className="sort-label">Sort:</span>
              <SegmentedControl
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                ariaLabel="Sort menu items"
              />
            </div>
          </div>
        </div>
      )}

      {/* Menu Items by Category */}
      <div className="menu-container">
        {isLoading ? (
          <div className="menu-skeleton" aria-label="Loading menu items">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="skeleton-dish-card">
                <div className="skeleton-dish-image"></div>
                <div className="skeleton-dish-content">
                  <div className="skeleton-dish-title"></div>
                  <div className="skeleton-dish-description"></div>
                  <div className="skeleton-dish-footer"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          Object.entries(menuByCategory).map(([categoryName, items]) => {
            const isExpanded = expandedSections[categoryName] ?? false;
            const sectionId = `section-${categoryName}`;
            const panelId = `panel-${categoryName}`;

            return (
              <section
                key={categoryName}
                className="menu-section"
                ref={el => sectionRefs.current[categoryName] = el}
                data-category={categoryName}
                aria-labelledby={sectionId}
              >
                <button
                  className="section-header-menu collapsible"
                  onClick={() => toggleSection(categoryName)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  id={sectionId}
                >
                  <div className="section-header-content">
                    <h2 className="section-title-menu">
                      {categoryName}
                    </h2>
                    <p className="section-subtitle-menu">
                      {items.length} {items.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                  <span 
                    className={`section-chevron ${isExpanded ? 'expanded' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <div 
                  id={panelId}
                  className={`menu-grid-container ${isExpanded ? 'expanded' : 'collapsed'}`}
                  role="region"
                  aria-hidden={!isExpanded}
                >
                  <div className="menu-grid">
                    {items.map(item => {
                      const quantity = getItemQuantity(item.id);
                      return (
                        <article key={item.id} className="dish-card">
                          <div className="dish-image-container">
                            <img src={item.image} alt={item.name} className="dish-image" />
                            {item.isVeg && (
                              <span 
                                className="dish-veg-badge" 
                                role="img" 
                                aria-label="Vegetarian"
                                title="Vegetarian"
                              ></span>
                            )}
                            {item.hasOffer && item.offerText && (
                              <span 
                                className="dish-offer-badge" 
                                role="status" 
                                aria-label={`Offer: ${item.offerText}`}
                                title={item.offerText}
                              >
                                🏷️ {item.offerText}
                              </span>
                            )}
                          </div>

                          <div className="dish-content">
                            <h3 className="dish-name">{item.name}</h3>
                            {item.description && (
                              <p className="dish-description">{item.description}</p>
                            )}
                            <div className="dish-footer">
                              <span className="dish-price" aria-label={`Price ${(item.price * 80).toFixed(0)} rupees`}>
                                ₹{(item.price * 80).toFixed(0)}
                              </span>
                              
                              {quantity === 0 ? (
                                <button 
                                  className="dish-add-btn"
                                  onClick={() => onAddToCart(item)}
                                  aria-label={`Add ${item.name} to cart`}
                                >
                                  Add +
                                </button>
                              ) : (
                                <div className="dish-quantity-controls" role="group" aria-label={`${item.name} quantity controls`}>
                                  <button
                                    className="quantity-btn"
                                    onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                                    aria-label="Decrease quantity"
                                  >
                                    −
                                  </button>
                                  <span className="quantity-value" aria-live="polite" aria-atomic="true">
                                    {quantity}
                                  </span>
                                  <button
                                    className="quantity-btn"
                                    onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                                    aria-label="Increase quantity"
                                  >
                                    +
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })
        )}

        {!isLoading && Object.keys(menuByCategory).length === 0 && (
          <div className="no-items">
            <p className="no-items-icon" aria-hidden="true">🍽️</p>
            <p className="no-items-text">No items available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
