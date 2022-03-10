import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();

    // Daria para fazer um map dentro desta função do próprio data

    // Acho que seria ideal dar um bind na função, pois ela está executando automaticamente por ser arrow function

    // Assim não seria necessário controlar state

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>{ console.log(data) }</div>
    );
  }
}

export default Categories;
