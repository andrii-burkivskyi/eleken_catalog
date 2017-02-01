import React, { Component } from 'react';

import styles from './CatalogTitle.scss';

export default class CatalogTitle extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          Catalog
        </h2>
      </div>
    );
  }
}
