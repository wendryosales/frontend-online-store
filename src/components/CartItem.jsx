import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  handleAddClick = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }), () => {
      const { data: { price }, changeTotalPrice } = this.props;
      changeTotalPrice(price);
    });
  };

  handleRemoveClick = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }), () => {
      const { quantity } = this.state;
      const { data: { price }, changeTotalPrice } = this.props;

      if (quantity < 1) {
        this.setState({ quantity: 1 }, () => changeTotalPrice(price));
      }

      const negative = -1;

      changeTotalPrice(negative * price);
    });
  };

  handleRemoveItem = () => {
    const { data, removeItem } = this.props;

    removeItem(data.id);
  }

  render() {
    const { quantity } = this.state;
    const { data, data: { availableQuantity } } = this.props;
    const { title, price, thumbnailId } = data;
    const fixedPrice = (price * quantity).toFixed(2);

    const availableStock = quantity === availableQuantity;
    const minimumQuantity = quantity === 1;

    return (
      <div className="d-flex align-items-center">
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={ this.handleRemoveItem }
        >
          <AiFillCloseCircle />
        </button>
        <img
          src={ `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp` }
          alt={ title }
        />
        <div
          data-testid="shopping-cart-product-name"
        >
          {title}
        </div>
        <div className="d-flex align-items-center">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            className="btn btn-outline-warning"
            onClick={ this.handleRemoveClick }
            disabled={ minimumQuantity }
          >
            <AiFillMinusCircle />
          </button>
          <div
            data-testid="shopping-cart-product-quantity"
          >
            { quantity }

          </div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            className="btn btn-outline-success"
            onClick={ this.handleAddClick }
            disabled={ availableStock }
          >
            <AiFillPlusCircle />
          </button>
        </div>
        <div>
          {`R$ ${fixedPrice}`}
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnailId: PropTypes.string,
    id: PropTypes.string,
    availableQuantity: PropTypes.number,
  }).isRequired,
  changeTotalPrice: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
