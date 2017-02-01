import React, { Component } from 'react'; import { connect } from 'react-redux';

import Products from 'components/Products/Products.jsx';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton.jsx';

import { fetchCatalogProducts } from 'actions/catalog.action.js';

import { catalogProductsSelector } from 'selectors/catalog.selector.js';

function mapStateToProps(state, ownProps) {
  const { filter } = ownProps.params;

  return {
    products: catalogProductsSelector(state, filter),
    isFetching: state.getIn(['catalogProducts', filter, 'isFetching']),
    page: state.getIn(['catalogProducts', filter, 'page']),
    totalPages: state.getIn(['catalogProducts', filter, 'totalPages'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMoreProducts: (key, page) => dispatch(fetchCatalogProducts(key, page))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CatalogProductsPage extends Component {
  render() {
    const {
      products,
      isFetching,
      page,
      totalPages,
      loadMoreProducts
    } = this.props;
    const { filter } = this.props.params;

    return (
      <div>
        <Products
          products={products}
        />

        <LoadMoreButton
          isFetching={isFetching}
          page={page}
          totalPages={totalPages}
          filter={filter}
          loadMoreFunction={loadMoreProducts}
        />
      </div>
    );
  }
}
