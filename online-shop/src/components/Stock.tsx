import React from 'react';
import Product from './Product';
import '../Style.css';

// interface StockProps {
//   products: Product[];
// };

// const Stock: React.FC<StockProps> = ({ products }) => (
//   <div>
//     {products.map((product) => <Product name={product.props.name} category={product.props.category} price={product.props.price} />)}
//   </div>
// );

function Stock(props: { products: {name:string, category:string, price:string}[]} ) {
  return (
    <div>
      {   props.products.map((product) => <Product name={product.name} category={product.category} price={product.price} />)}
    </div>
  );
}


export default Stock;