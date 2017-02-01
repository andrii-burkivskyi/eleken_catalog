import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppWrapper from 'components/Wrappers/AppWrapper.jsx';
import Header from 'components/Header/Header.jsx';
import FooterSubcribeForm from 'components/Footer/FooterSubscribeForm.jsx';
import FooterNavigation from 'components/Footer/FooterNavigation.jsx';

import { infoNavSelector, mainNavSelector } from 'selectors/header.selector.js';

function mapStateToProps(state) {
  return {
    infoNav: infoNavSelector(state),
    mainNav: mainNavSelector(state)
  };
}

@connect(mapStateToProps)
export default class AppPage extends Component {
  render() {
    const { infoNav, mainNav, children } = this.props;

    return (
      <AppWrapper>
        <Header
          infoNav={infoNav}
          mainNav={mainNav}
        />
        {children}
        <FooterSubcribeForm />
        <FooterNavigation
          mainNav={mainNav}
        />
      </AppWrapper>
    );
  }
}
