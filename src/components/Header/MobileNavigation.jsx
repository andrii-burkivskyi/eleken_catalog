import React, { Component } from 'react';
import classNames from 'classnames';

import HeaderMainNavItem from 'components/Header/HeaderMainNavItem.jsx';
import Icon from 'components/Icon/Icon.jsx';

import MobileSearchField from './MobileSearchField.jsx';

import styles from './MobileNavigation.scss';

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { mainNav, infoNav } = this.props;
    const container = classNames(
      styles.container,
      this.state.isOpen && styles.open
    );

    return (
      <div className={container}>
        <button
          className={styles.button}
          onClick={this.toggleMenu}
        >
          <Icon
            className={styles.icon}
            glyph={'#burger-menu'}
          />
        </button>

        <nav className={styles.navigation}>
          <MobileSearchField />
          <div className={styles.main_nav}>
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
          </div>

          <div className={styles.info_nav}>
            {
              infoNav.map((navItem) =>
                <HeaderMainNavItem
                  key={navItem.get('slug')}
                  to={navItem.get('url')}
                  title={navItem.get('title')}
                />
              )
            }
          </div>

          <button className={styles.currensy}>
            <span className={styles.side_nav_name}>Dollars</span>
            <Icon className={styles.side_nav_icon} glyph={'#arrow'} />
          </button>

          <button className={styles.currensy}>
            <span className={styles.side_nav_name}>En</span>
            <Icon className={styles.side_nav_icon} glyph={'#arrow'} />
          </button>
        </nav>
      </div>
    );
  }
}
