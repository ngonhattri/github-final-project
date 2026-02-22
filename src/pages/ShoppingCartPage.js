import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../store/cartSlice';
import Header from '../components/Header';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state) => state.cart);

  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-content">
        <h2 className="page-title">Shopping Cart</h2>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p>Total Items: <strong>{totalQuantity}</strong></p>
              <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
            </div>

            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">
                      Unit Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="cart-item-subtotal">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartPage;
