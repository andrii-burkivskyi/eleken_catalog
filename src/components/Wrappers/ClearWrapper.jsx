import React, { Component } from 'react';

import styles from './ClearWrapper.scss';

export default class ClearWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
