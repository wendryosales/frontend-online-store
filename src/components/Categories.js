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
