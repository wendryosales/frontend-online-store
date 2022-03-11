import React, { Component } from 'react';
import { getCategories } from '../services/api';
import CategoriesBtn from './CategoriesBtn';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }

  fetchCategories = async () => {
    const result = await getCategories();
    return result;
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
              key={ category.id }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
