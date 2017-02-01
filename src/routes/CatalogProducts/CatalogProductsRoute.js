import store from 'store';

import { fetchCatalogProducts } from 'actions/catalog.action.js';

import CatalogProductsPage from './CatalogProductsPage.jsx';

module.exports = {
  path: '/catalog/:filter',

  onEnter(location, replace, callback) {
    document.title = 'Eleken | Catalog';

    store.dispatch(fetchCatalogProducts('all'));
    callback();
  },

  getComponent(location, callback) {
    require.ensure([], () => {
      callback(null, CatalogProductsPage);
    });
  }
};
