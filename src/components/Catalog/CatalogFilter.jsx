import React, { Component } from 'react';

import CatalogFilterItem from 'components/Catalog/CatalogFilterItem.jsx';
import ClearWrapper from 'components/Wrappers/ClearWrapper.jsx';

import styles from './CatalogFilter.scss';

export default class CatalogFilter extends Component {
  render() {
    const { catalogFilters } = this.props;

    return (
      <ClearWrapper>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            {
              catalogFilters.map((filter) =>
                <CatalogFilterItem
                  key={filter.get('slug')}
                  url={filter.get('url')}
                  title={filter.get('title')}
                />
              )
            }
          </nav>
        </div>
      </ClearWrapper>
    );
  }
}
