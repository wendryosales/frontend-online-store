import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from '../components/CartItem';

/* <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> */

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
      thisProduct: [],
    };
  }

  componentDidMount() {
    const productsList = JSON.parse(localStorage.getItem('shoppingCart'));
    const startPrice = productsList.map((product) => product.price);
    const finalPrice = startPrice.reduce((acc, product) => acc + product);

    this.setState({
      thisProduct: productsList,
      totalPrice: finalPrice,
    });
  }

  changeTotalPrice = (total) => {
    console.log(total);
    this.setState({ totalPrice: total });
  }

  render() {
    const { totalPrice, thisProduct } = this.state;

    return (
      <div>
        <div>
          <div>
            Carrinho
            <AiOutlineShoppingCart />
          </div>
          <div className="container">
            {thisProduct.map((item) => (<CartItem
              data={ item }
              key={ item }
              changeTotalPrice={ this.changeTotalPrice }
            />))}
          </div>
          <div>
            Valor Total da Compra: R$
            {totalPrice}
          </div>
          <button className="btn btn-primary" type="button">Finalizar Compra</button>
        </div>
      </div>
    );
  }
}

export default Cart;
