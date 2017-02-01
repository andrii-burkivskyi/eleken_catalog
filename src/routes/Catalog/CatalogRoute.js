import store from 'store';

import { fetchCatalogFilters } from 'actions/catalog.action.js';

import CatalogPage from './CatalogPage.jsx';

module.exports = {
  path: '/catalog',

  onEnter(location, replace, callback) {
    document.title = 'Eleken | Front page';

    store.dispatch(fetchCatalogFilters());

    callback();
  },

  getComponent(location, callback) {
    require.ensure([], () => {
      callback(null, CatalogPage);
    });
  },

  getChildRoutes(location, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('routes/CatalogProducts/CatalogProductsRoute.js')
      ]);
    });
  }
};
