import React, { Component } from 'react';

import Icon from 'components/Icon/Icon.jsx';
import MainWrapper from 'components/Wrappers/MainWrapper.jsx';

import HeaderMainNavItem from './HeaderMainNavItem.jsx';
import MobileNavigation from './MobileNavigation.jsx';

import styles from './HeaderNavigation.scss';

export default class HeaderNavigation extends Component {
  render() {
    const { mainNav, infoNav } = this.props;

    return (
      <MainWrapper>
        <div className={styles.container}>
          <MobileNavigation
            mainNav={mainNav}
            infoNav={infoNav}
          />

          <div className={styles.logo}>
            <img src={'/images/logo.png'} alt={'C&B'} />
          </div>

          <nav className={styles.main_nav}>
            {
              mainNav.map((navItem) =>
                <HeaderMainNavItem
                  key={navItem.get('slug')}
                  to={navItem.get('url')}
                  title={navItem.get('title')}
                  style={navItem.get('style')}
                />
              )
            }
          </nav>

          <div className={styles.controls}>
            <div className={styles.basket}>
              <span className={styles.basket_name}>Your bag</span>
              <div className={styles.basket_counter}>2</div>
            </div>

            <button className={styles.search}>
              <Icon className={styles.search_icon} glyph={'#search'} />
            </button>
          </div>
        </div>
      </MainWrapper>
    );
  }
}
