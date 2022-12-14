import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartCheckout extends Component {
  render() {
    const { data } = this.props;
    const { title, price, thumbnailId } = data;
    const url = `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp`;
    return (
      <div className="d-flex shadow">
        <div className="w-25 d-flex align-items-center justify-content-center">
          <img className="w-50" src={ url } alt={ title } />
        </div>
        <div>{title}</div>
        <p>
          R$
          {' '}
          {price}
        </p>
      </div>
    );
  }
}

CartCheckout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnailId: PropTypes.string,
  }).isRequired,
};

export default CartCheckout;
