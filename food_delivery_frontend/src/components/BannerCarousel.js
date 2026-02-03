import React, { useState, useEffect } from 'react';
import './BannerCarousel.css';

// PUBLIC_INTERFACE
/**
 * Promotional banner carousel component - Swiggy style with pill tags
 * @param {Object} props - Component props
 * @param {Array} props.banners - Array of banner objects
 */
const BannerCarousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  // PUBLIC_INTERFACE
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // PUBLIC_INTERFACE
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // PUBLIC_INTERFACE
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div className="banner-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={goToPrevious}
          aria-label="Previous banner"
        >
          ‹
        </button>

        <div className="carousel-slides">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${banner.image})`,
              }}
            >
              <div className="slide-content">
                {banner.tag && <span className="slide-tag">{banner.tag}</span>}
                <h2 className="slide-title">{banner.title}</h2>
                <p className="slide-subtitle">{banner.subtitle}</p>
                <button className="slide-button">Order Now →</button>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={goToNext}
          aria-label="Next banner"
        >
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
