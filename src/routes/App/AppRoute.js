import store from 'store';

import { fetchInfoNav, fetchMainNav } from 'actions/header.action.js';

module.exports = {
  path: '/',

  onEnter(location, replace, callback) {
    document.title = 'Eleken | Front page';

    store.dispatch(fetchInfoNav());
    store.dispatch(fetchMainNav());
    callback();
  },

  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./AppPage.jsx').default);
    });
  },

  getChildRoutes(location, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('routes/Catalog/CatalogRoute.js')
      ]);
    });
  }
};
