import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesBtn extends Component {
  render() {
    const { name } = this.props;

    return (
      <button
        data-testid="category"
        type="button"
        name={ name }
      >
        {name}
      </button>
    );
  }
}

CategoriesBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoriesBtn;
