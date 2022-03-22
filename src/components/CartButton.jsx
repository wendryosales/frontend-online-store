import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
          className="cart-btn"
        >
          <FaShoppingCart className="fs-2 text link-light" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
