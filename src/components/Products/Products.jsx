import React, { Component } from 'react';

import ClearWrapper from 'components/Wrappers/ClearWrapper.jsx';
import ProductItem from './ProductItem.jsx';

import styles from './Products.scss';

export default class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <ClearWrapper>
        <div className={styles.container}>
          {
            products.map((product) =>
              <ProductItem
                key={product.get('id')}
                title={product.get('title')}
                thumbnails={product.get('thumbnails')}
                price={product.get('price')}
                discountPrice={product.get('discountPrice')}
                label={product.get('label')}
                url={product.get('url')}
              />
            )
          }
        </div>
      </ClearWrapper>
    );
  }
}
