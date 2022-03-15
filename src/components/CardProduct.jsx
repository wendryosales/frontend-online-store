import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProduct extends Component {
  addToCart = () => {
    const { data } = this.props;
    const cartArray = [{}];
    cartArray.push(data);
    localStorage.setItem('shoppingCart', JSON.stringify(cartArray));
    const takeItem = localStorage.getItem('shoppingCart');
    const itemObj = JSON.parse(takeItem);
    return console.log(itemObj);
  }

  render() {
    const { data } = this.props;
    const { title, price, thumbnail_id: thumbnailId } = data; // camelCase erro LINT
    const url = `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp`;
    return (
      <div data-testid="product">
        <div>
          <h1>{ title }</h1>
          <img src={ url } alt={ title } />
          <p>{ price }</p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.addToCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

CardProduct.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail_id: PropTypes.string,
  }).isRequired,

};

export default CardProduct;
