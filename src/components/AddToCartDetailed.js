import React from 'react';
import PropTypes from 'prop-types';
import { readShoppingCart, saveShoppingCart } from '../services/cart';

class AddToCartDetailed extends React.Component {
  handleAddToCartDet = () => {
    const { details } = this.props;
    const { id, thumbnail_id: thumbnailId, title,
      price, available_quantity: availableQuantity } = details;
    const shoppingCart = readShoppingCart();
    const newItem = { id, thumbnailId, title, price, availableQuantity };
    const hasItem = shoppingCart.some((item) => item.id === newItem.id);

    if (!hasItem) {
      shoppingCart.push(newItem);
    }

    saveShoppingCart(shoppingCart);
  }

  render() {
    return (
      <button
        className="btn btn-primary col-3 mb-1"
        data-testid="product-detail-add-to-cart"
        type="button"
        onClick={ this.handleAddToCartDet }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartDetailed.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail_id: PropTypes.string,
    available_quantity: PropTypes.number,
  }).isRequired,
};

export default AddToCartDetailed;
