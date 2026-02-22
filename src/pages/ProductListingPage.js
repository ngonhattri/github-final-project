import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import Header from '../components/Header';
import plantsData from '../plantData';
import './ProductListingPage.css';

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="product-page">
      <Header />
      <div className="product-content">
        <h2 className="page-title">Our Collection</h2>
        {plantsData.map((category) => (
          <div key={category.category} className="category-section">
            <h3 className="category-title">{category.category}</h3>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />
                  <h4 className="plant-name">{plant.name}</h4>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={isInCart(plant.id)}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
