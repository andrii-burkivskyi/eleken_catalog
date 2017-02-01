import React, { Component } from 'react';

import HeaderSettings from './HeaderSettings.jsx';
import HeaderNavigation from './HeaderNavigation.jsx';

import styles from './Header.scss';

export default class Header extends Component {
  render() {
    const { infoNav, mainNav } = this.props;

    return (
      <div className={styles.container}>
        <HeaderSettings
          infoNav={infoNav}
        />

        <HeaderNavigation
          infoNav={infoNav}
          mainNav={mainNav}
        />
      </div>
    );
  }
}
