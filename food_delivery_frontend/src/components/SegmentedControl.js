import React, { useState, useRef, useEffect } from 'react';
import './SegmentedControl.css';

// PUBLIC_INTERFACE
/**
 * iOS-style segmented control with smooth animations and accessibility
 * @param {Object} props - Component props
 * @param {Array} props.options - Array of option objects with { value, label }
 * @param {string} props.value - Currently selected value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.ariaLabel - Accessibility label for the control group
 */
const SegmentedControl = ({ options, value, onChange, ariaLabel = 'Segmented control' }) => {
  const [thumbStyle, setThumbStyle] = useState({});
  const optionRefs = useRef([]);
  const containerRef = useRef(null);

  // Calculate thumb position and size
  useEffect(() => {
    const selectedIndex = options.findIndex(opt => opt.value === value);
    if (selectedIndex === -1 || !optionRefs.current[selectedIndex]) return;

    const selectedButton = optionRefs.current[selectedIndex];
    const container = containerRef.current;
    
    if (selectedButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = selectedButton.getBoundingClientRect();
      
      setThumbStyle({
        width: `${buttonRect.width}px`,
        transform: `translateX(${buttonRect.left - containerRect.left}px)`,
      });
    }
  }, [value, options]);

  // Handle option click
  const handleOptionClick = (optionValue) => {
    if (optionValue !== value) {
      onChange(optionValue);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, optionValue, index) => {
    let newIndex = index;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = index > 0 ? index - 1 : options.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = index < options.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = options.length - 1;
        break;
      default:
        return;
    }
    
    onChange(options[newIndex].value);
    optionRefs.current[newIndex]?.focus();
  };

  return (
    <div 
      className="segmented-control-container"
      role="radiogroup"
      aria-label={ariaLabel}
      ref={containerRef}
    >
      {/* Animated thumb/pill */}
      <div 
        className="segmented-control-thumb"
        style={thumbStyle}
        aria-hidden="true"
      />
      
      {/* Options */}
      {options.map((option, index) => {
        const isSelected = option.value === value;
        
        return (
          <button
            key={option.value}
            ref={el => optionRefs.current[index] = el}
            className={`segmented-control-option ${isSelected ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option.value)}
            onKeyDown={(e) => handleKeyDown(e, option.value, index)}
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            type="button"
          >
            <span className="segmented-control-label">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
