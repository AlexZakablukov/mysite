import React from 'react';

import ProductCard from "../components/ProductCard";

const Shop = props => {
  return (
    <div className="shopPage">
      <h1>Shop</h1>
      <div className="product-list">
        <ProductCard/>
      </div>
    </div>
  )
};

export default Shop