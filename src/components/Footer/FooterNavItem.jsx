import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './FooterNavItem.scss';

export default class FooterNavItem extends Component {
  render() {
    const { to, title } = this.props;

    return (
      <Link
        className={styles.link}
        to={to}
      >
        {title}
      </Link>
    );
  }
}
