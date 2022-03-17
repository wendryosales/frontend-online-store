import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { readShoppingCart, saveShoppingCart } from '../services/cart';

class CardProduct extends Component {
  addToCart = () => {
    const { data } = this.props;
    const { title, price, thumbnail_id: thumbnailId, id } = data;
    const object = {
      title,
      price,
      thumbnailId,
      id,
    };
    const takeItem = readShoppingCart();
    const hasItem = takeItem.some((el) => el.id === object.id);
    if (!hasItem) takeItem.push(object);
    saveShoppingCart(takeItem);
  }

  render() {
    const { data } = this.props;
    const { title, price, thumbnail_id: thumbnailId, id, shipping } = data; // camelCase erro LINT
    const { free_shipping: freeShipping } = shipping;
    const url = `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp`;
    return (
      <div
        className="card shadow card-width m-1 p-3 d-flex justify-content-between"
        data-testid="product"
      >
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>
          <h1 className="fs-5 text card-title">{title}</h1>
        </Link>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>
          <img className="card-img-center mh-img" src={ url } alt={ title } />
        </Link>
        <div>
          <p className="fs-5 text">
            R$
            {' '}
            {price.toFixed(2)}
          </p>
          { freeShipping === true
          && <p data-testid="free-shipping" className="text-success">Frete Grátis</p> }
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.addToCart }
            className="btn btn-primary"
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
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default CardProduct;
