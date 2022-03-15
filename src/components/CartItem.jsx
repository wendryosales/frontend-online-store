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
      const { quantity } = this.state;
      const { data: { price }, changeTotalPrice } = this.props;
      changeTotalPrice(price * quantity);
    });
  };

  handleRemoveClick = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }), () => {
      const { quantity } = this.state;
      const { data: { price }, changeTotalPrice } = this.props;
      changeTotalPrice(price * quantity);
    });
  };

  render() {
    const { quantity } = this.state;
    const { data } = this.props;
    const { title, price, thumbnail_id: thumbnailId } = data;
    const fixedPrice = price;

    return (
      <div className="d-flex align-items-center">
        <button
          type="button"
          className="btn btn-outline-danger"
        >
          <AiFillCloseCircle />
        </button>
        <img
          src={ thumbnailId }
          alt={ title }
        />
        <div>{title}</div>
        <div className="d-flex align-items-center">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            className="btn btn-outline-warning"
            onClick={ this.handleRemoveClick }
          >
            <AiFillMinusCircle />
          </button>
          <div>{ quantity }</div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            className="btn btn-outline-success"
            onClick={ this.handleAddClick }
          >
            <AiFillPlusCircle />
          </button>
        </div>
        <div>
          R$
          <span>{fixedPrice.toFixed(2)}</span>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail_id: PropTypes.string,
  }).isRequired,

};

export default CartItem;
