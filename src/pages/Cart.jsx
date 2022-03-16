import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
      cartList: [],
    };
  }

  componentDidMount() {
    this.reloadPage();
  }

  reloadPage = () => {
    const productsList = JSON.parse(localStorage.getItem('shoppingCart'));

    if (productsList.length > 0) {
      const startPrice = productsList.map((product) => product.price);
      const finalPrice = startPrice.reduce((acc, product) => acc + product);

      this.setState({
        cartList: productsList,
        totalPrice: finalPrice,
      });
    }
  }

  changeTotalPrice = (total) => {
    this.setState({ totalPrice: total });
  }

  removeItem = (itemId) => {
    const { cartList } = this.state;
    const idList = cartList.map((item) => item.id);
    const idValidation = idList.some((id) => id);

    if (idValidation) {
      const newList = cartList.filter((item) => item.id !== itemId);
      const updateList = JSON.stringify(newList);

      localStorage.setItem('shoppingCart', updateList);

      this.setState({ cartList: newList });
      this.reloadPage();
    }
  }

  render() {
    const { totalPrice, cartList } = this.state;

    return (
      <div>
        <div>
          <div>
            Carrinho
            <AiOutlineShoppingCart />
          </div>

          {cartList.length === 0
            ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
            : (
              <>
                <div className="container">
                  {cartList.map((item) => (<CartItem
                    data={ item }
                    key={ item }
                    changeTotalPrice={ this.changeTotalPrice }
                    removeItem={ this.removeItem }
                  />))}
                </div>
                <div>
                  Valor Total da Compra:
                  <br />
                  {`R$ ${totalPrice}`}
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                >
                  Finalizar Compra
                </button>
              </>
            )}
        </div>
      </div>
    );
  }
}

export default Cart;
