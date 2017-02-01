import React, { Component } from 'react';

import styles from './MainWrapper.scss';

export default class MainWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
