import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';

import styles from './HeaderMainNavItem.scss';

export default class HeaderMainNavItem extends Component {
  render() {
    const { to, title, style } = this.props;
    const link = classNames(
      styles.container,
      (style === 'attention' && styles.attention)
    );

    return (
      to === '/'
      ?
        <IndexLink
          className={link}
          activeClassName={styles.active}
          to={to}
        >
          {title}
        </IndexLink>
      :
        <Link
          className={link}
          activeClassName={styles.active}
          to={to}
        >
          {title}
        </Link>
    );
  }
}
