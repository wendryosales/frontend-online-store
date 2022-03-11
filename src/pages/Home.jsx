import React, { Component } from 'react';
import Categories from '../components/Categories';
import CartButton from '../components/CartButton';

class Home extends Component {
  render() {
    return (
      <div className="home ">
        <div>
          <input
            type="text"
            className="input-search"
            placeholder="Pesquisar"
          />
        </div>
        <div className="main">
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <CartButton />
        <Categories />
      </div>
    );
  }
}

export default Home;
