import React, { Component } from 'react';

import ClearWrapper from 'components/Wrappers/ClearWrapper.jsx';

import FooterNavItem from './FooterNavItem.jsx';

import styles from './FooterNavigation.scss';

export default class FooterNavigation extends Component {
  render() {
    const { mainNav } = this.props;

    return (
      <ClearWrapper>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={'/images/logo.png'} alt={'C&B'} />
          </div>

          <nav className={styles.main_nav}>
            {
              mainNav.map((navItem) =>
                <FooterNavItem
                  key={navItem.get('slug')}
                  to={navItem.get('url')}
                  title={navItem.get('title')}
                  style={navItem.get('style')}
                />
              )
            }
          </nav>

          <div className={styles.copyright}>
            ©2010 - 2016 All rights reserved
          </div>
        </div>
      </ClearWrapper>
    );
  }
}
