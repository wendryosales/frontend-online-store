import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesBtn extends Component {
  handleClick = () => {

  }

  render() {
    const { name, id } = this.props;

    return (
      <button
        className="btn btn-primary col-3 mb-1"
        data-testid="category"
        id={ id }
        name={ name }
        type="button"
      >
        {name}
      </button>
    );
  }
}

CategoriesBtn.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoriesBtn;
