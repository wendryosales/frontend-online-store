import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategory } from '../services/api';
import CategoriesBtn from './CategoriesBtn';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }

  handleClickOnCategory = async (event) => {
    const { displayProductsByCategory } = this.props;
    const { id } = event.target;

    const data = await getProductsFromCategory(id);

    displayProductsByCategory(data.results);
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="container ">
        <div className="d-flex flex-column">
          { categories.map((category) => (
            <CategoriesBtn
              id={ category.id }
              name={ category.name }
              handleClickOnCategory={ this.handleClickOnCategory }
              key={ category.id }
            />
          ))}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  displayProductsByCategory: PropTypes.func.isRequired,
};

export default Categories;
