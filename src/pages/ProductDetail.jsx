import React from 'react';
import PropTypes from 'prop-types';
import ProductAttributes from '../components/ProductAttributes';
import { getProductById } from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const productInfo = await getProductById(id);
    this.setState({
      details: productInfo,
    });
  }

  render() {
    const { details: {
      title,
      attributes,
      price,
      thumbnail_id: thumbnailId } } = this.state;

    return (
      <div className="d-flex p-2">
        <div className="p-2">
          <h4 data-testid="product-detail-name">{ title }</h4>
          <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumbnailId}-O.webp` } alt={ title } />
          <p>{`R$${price}`}</p>
        </div>
        { !attributes ? <p>Carregando...</p>
          : (
            <div className="p-2">
              {attributes.map((elem) => (
                <ProductAttributes
                  key={ elem.id }
                  data={ elem }
                />))}
            </div>
          )}

      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetail;
