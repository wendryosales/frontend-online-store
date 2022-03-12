import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesBtn extends Component {
  render() {
    const { name, id, handleClickOnCategory } = this.props;

    return (
      <button
        className="btn btn-primary col-3 mb-1"
        data-testid="category"
        id={ id }
        name={ name }
        type="button"
        onClick={ handleClickOnCategory }
      >
        {name}
      </button>
    );
  }
}

CategoriesBtn.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClickOnCategory: PropTypes.func.isRequired,
};

export default CategoriesBtn;
