import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
          className="cart-btn"
        >
          Cart
        </Link>
      </div>
    );
  }
}

export default CartButton;
