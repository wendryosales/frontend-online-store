import React, { Component } from 'react';
import CardProduct from '../components/CardProduct';
import Categories from '../components/Categories';
import CartButton from '../components/CartButton';
import { getProductsFromSearch } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      //  começa valendo 1 para não renderizar o <p>Nenhum produto foi encontrado</p>
      products: [1],
      searchValue: 'computador',
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;

    this.setState({
      searchValue: value,
    });
  }

  handleClick = async () => {
    const { searchValue } = this.state;
    const response = await getProductsFromSearch(searchValue);
    this.setState({
      products: response.results,
    });
  }

  displayProductsByCategory = (categoryProducts) => {
    this.setState({ products: categoryProducts });
  }

  render() {
    const { searchValue, products } = this.state;
    return (
      <div className="home ">
        <div className="d-flex justify-content-around">
          <div>
            <input
              onChange={ this.handleChange }
              type="text"
              className="input-search"
              placeholder="Pesquisar"
              data-testid="query-input"
              value={ searchValue }
            />
            <button
              onClick={ this.handleClick }
              type="button"
              className="btn btn-primary"
              data-testid="query-button"
            >
              Search
            </button>
          </div>
          <CartButton />
        </div>
        <div className="main">
          <Categories displayProductsByCategory={ this.displayProductsByCategory } />
          <div>
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <div className="listItems">
              { products.length === 0 && <p> Nenhum produto foi encontrado</p>}
              {
                products.length > 1 && products.map((element) => (<CardProduct
                  key={ element.id }
                  data={ element }
                />))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
