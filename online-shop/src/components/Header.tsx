import { Link } from 'react-router-dom'
import React from 'react';
import '../Style.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/products">Products</Link> </li>
            <li> <Link to="/shoppingCart">Shopping Cart</Link> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
