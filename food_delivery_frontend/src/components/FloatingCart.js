import React from 'react';
import './FloatingCart.css';

// PUBLIC_INTERFACE
/**
 * Sticky floating cart component with real-time cart updates
 * @param {Object} props - Component props
 * @param {Array} props.cartItems - Array of cart items
 * @param {Function} props.onRemoveItem - Remove item handler
 * @param {Function} props.onUpdateQuantity - Update quantity handler
 * @param {Function} props.onCheckout - Checkout handler
 */
const FloatingCart = ({ cartItems, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  // PUBLIC_INTERFACE
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // PUBLIC_INTERFACE
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="floating-cart floating-cart-empty">
        <div className="cart-header">
          <h3 className="cart-title">🛒 Your Cart</h3>
        </div>
        <div className="empty-cart">
          <p className="empty-cart-icon">🍽️</p>
          <p className="empty-cart-text">Your cart is empty</p>
          <p className="empty-cart-subtext">Add items to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="floating-cart">
      <div className="cart-header">
        <h3 className="cart-title">🛒 Your Cart</h3>
        <span className="cart-count">{getTotalItems()} items</span>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h4 className="cart-item-name">{item.name}</h4>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
                aria-label="Remove item"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span className="total-label">Total:</span>
          <span className="total-amount">${calculateTotal()}</span>
        </div>

        <button className="checkout-btn" onClick={onCheckout}>
          Checkout →
        </button>
      </div>
    </div>
  );
};

export default FloatingCart;
