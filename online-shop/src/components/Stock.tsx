import React from 'react';
import Product from './Product';
import '../Style.css';

interface Prod {
  name: string,
  category?: string,
  price: string
}

interface StockProps {
  products: Prod[];
};

const Stock: React.FC<StockProps> = ({ products }) => (
  <div>
    {products.map((product) => <Product key={product.name} name={product.name} category={product.category} price={product.price} />)}
  </div>
);

export default Stock;