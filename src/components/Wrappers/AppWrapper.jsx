import React, { Component } from 'react';

import styles from './AppWrapper.scss';

export default class AppWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
