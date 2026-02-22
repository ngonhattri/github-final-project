import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-description">
          Welcome to Paradise Nursery, where green meets serenity! We are your
          one-stop destination for beautiful houseplants that bring life and
          freshness into any space. Whether you are a seasoned plant parent or
          just starting your green journey, our curated collection of succulents,
          tropical plants, and low-light varieties has something for everyone.
          Let us help you transform your home into a lush paradise.
        </p>
        <Link to="/products" className="landing-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
