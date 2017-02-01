import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './ProductItem.scss';

export default class ProductItem extends Component {
  render() {
    const {
      title,
      thumbnails,
      price,
      discountPrice,
      label
    } = this.props;
    const priceClasses = classNames(
      styles.price,
      (discountPrice && styles.old)
    );


    return (
      <div className={styles.container}>
        {
          label &&
          <span className={styles.label}>{label}</span>
        }

        <img className={styles.image} src={thumbnails} alt={title} />

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.cost}>
          <span className={priceClasses}>{price}</span>

          {
            discountPrice &&
            <span className={styles.discount_price}>{discountPrice}</span>
          }
        </div>
      </div>
    );
  }
}
