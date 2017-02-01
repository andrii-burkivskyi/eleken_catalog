import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './CatalogFilterItem.scss';

export default class CatalogFilterItem extends Component {
  render() {
    const { url, title } = this.props;
    return (
      <Link
        className={styles.container}
        activeClassName={styles.active}
        to={url}
      >
        {title}
      </Link>
    );
  }
}
