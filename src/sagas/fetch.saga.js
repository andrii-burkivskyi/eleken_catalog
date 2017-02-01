import { normalize } from 'normalizr';
import createSagaWithFetch from 'sagas/createSagaWithFetch.js';

import {
  FETCH_INFO_NAV,
  FETCH_MAIN_NAV
} from 'actions/header.action.js';
import {
  FETCH_CATALOG_FILTERS,
  FETCH_CATALOG_PRODUCTS
} from 'actions/catalog.action.js';

import elekenAPI from 'api/eleken.api.js';

import { NAV_ITEMS } from 'schema/header.schema.js';
import { CATALOG_FILTERS, PRODUCTS } from 'schema/catalog.schema.js';

export default function* watchFetchActions() {
  const fetchInfoNav = createSagaWithFetch({
    types: FETCH_INFO_NAV.ALL,
    callAPI: () => elekenAPI.fetchInfoNav(),
    normalizing: (response) => normalize(response.data, NAV_ITEMS)
  });

  const fetchMainNav = createSagaWithFetch({
    types: FETCH_MAIN_NAV.ALL,
    callAPI: () => elekenAPI.fetchMainNav(),
    normalizing: (response) => normalize(response.data, NAV_ITEMS)
  });

  const fetchCatalogFilters = createSagaWithFetch({
    types: FETCH_CATALOG_FILTERS.ALL,
    callAPI: () => elekenAPI.fetchCatalogFilters(),
    normalizing: (response) => normalize(response.data, CATALOG_FILTERS)
  });

  const fetchCatalogProducts = createSagaWithFetch({
    types: FETCH_CATALOG_PRODUCTS.ALL,
    callAPI: (action) => elekenAPI.fetchCatalogProducts(action.key, action.page),
    shouldCallAPI: (state, action) =>
      state.getIn(['catalogProducts', action.key, 'data']).size === 0 ||
      action.page,
    normalizing: (response) => normalize(response.data, PRODUCTS),
    pagination: (response) => ({
      page: response.page,
      totalPages: response.totalPages
    }),
    getKeyFromAction: (action) => action.key
  });

  yield [
    fetchInfoNav,
    fetchMainNav,
    fetchCatalogFilters,
    fetchCatalogProducts
  ];
}
