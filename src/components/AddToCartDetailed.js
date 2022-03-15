import React from 'react';
import PropTypes from 'prop-types';

class AddToCartDetailed extends React.Component {
  handleAddToCartDet = async () => {
    const { details } = this.props;
    const readShoppingCart = () => JSON.parse(localStorage.getItem('shoppingCart'));
    const shoppingCart = await readShoppingCart();
    const newShoppingCart = [...shoppingCart, details];
    const saveShoppingCart = (param) => localStorage
      .setItem('shoppingCart', JSON.stringify(param));
    saveShoppingCart(newShoppingCart);
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
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail_id: PropTypes.string,
  }).isRequired,
};

export default AddToCartDetailed;
