import React, { Component } from 'react';
import { FaHome } from 'react-icons/fa';
import CartCheckout from '../components/CartCheckout';
import { readShoppingCart } from '../services/cart';

class Checkout extends Component {
  render() {
    const cartProducts = readShoppingCart();
    return (
      <div>
        <div className="container shadow">
          <FaHome />
        </div>
        <div className="container shadow">
          <div>
            <h3>Revise seus produtos</h3>
            <div className="container">
              { cartProducts.map((el) => (<CartCheckout
                key={ el.id }
                data={ el }
              />)) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
