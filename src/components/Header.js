import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <Link to="/" className="header-brand">
        Paradise Nursery
      </Link>
      <nav className="header-nav">
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon" role="img" aria-label="cart">&#128722;</span>
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
