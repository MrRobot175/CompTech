import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="p-info">
        <h2 className="p-title">{product.title}</h2>
        <p className="p-price">${product.price}</p>
        <button className="p-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
