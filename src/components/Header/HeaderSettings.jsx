import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon/Icon.jsx';
import MainWrapper from 'components/Wrappers/MainWrapper.jsx';

import styles from './HeaderSettings.scss';

export default class HeaderSettings extends Component {
  render() {
    const { infoNav } = this.props;

    return (
      <MainWrapper>
        <div className={styles.container}>
          <nav className={styles.info_nav}>
            {
              infoNav.map((navItem) =>
                <Link
                  className={styles.link}
                  key={navItem.get('slug')}
                  to={navItem.get('url')}
                >
                  {navItem.get('title')}
                </Link>
              )
            }
          </nav>

          <button className={styles.currency}>
            <span className={styles.text}>Dollars</span>
            <Icon className={styles.icon} glyph={'#arrow'} />
          </button>

          <button className={styles.language}>
            <span className={styles.text}>En</span>
            <Icon className={styles.icon} glyph={'#arrow'} />
          </button>
        </div>
      </MainWrapper>
    );
  }
}
