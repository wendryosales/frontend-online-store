import React from 'react';
import PropTypes from 'prop-types';

class ProductAttributes extends React.Component {
  render() {
    const { data: { name, value_name: valueName } } = this.props;
    return (
      <p>{`${name}: ${valueName}`}</p>
    );
  }
}

ProductAttributes.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    value_name: PropTypes.string,
  }).isRequired,
};

export default ProductAttributes;
