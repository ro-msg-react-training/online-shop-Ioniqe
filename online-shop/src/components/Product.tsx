import React from 'react';
import '../Style.css';

interface ProductProps {
  name: string;
  category?: string;
  price?: string;
};

const Product: React.FC<ProductProps> = ({ name, category, price }) => (
  <div className="center">
    <h2>Details for {name}:</h2>
    <h3>category: {category}</h3>
    <h3>price: {price}</h3>
  </div>
);

export default Product;
