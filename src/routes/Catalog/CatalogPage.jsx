import React, { Component } from 'react';
import { connect } from 'react-redux';

import CatalogTitle from 'components/Catalog/CatalogTitle.jsx';
import CatalogFilter from 'components/Catalog/CatalogFilter.jsx';

import { catalogFiltersSelector } from 'selectors/catalog.selector.js';

function mapStateToProps(state) {
  return {
    catalogFilters: catalogFiltersSelector(state)
  };
}

@connect(mapStateToProps)
export default class CatalogPage extends Component {
  render() {
    const { catalogFilters, children } = this.props;
    return (
      <div>
        <CatalogTitle />
        <CatalogFilter catalogFilters={catalogFilters} />
        {children}
      </div>
    );
  }
}
