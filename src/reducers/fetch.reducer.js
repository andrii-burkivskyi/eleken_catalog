import createReducerWithKeys from 'reducers/createReducerWithKeys.js';
import createReducerWithFetch from 'reducers/createReducerWithFetch.js';

import {
  FETCH_INFO_NAV,
  FETCH_MAIN_NAV
} from 'actions/header.action.js';

import {
  FETCH_CATALOG_FILTERS,
  FETCH_CATALOG_PRODUCTS
} from 'actions/catalog.action.js';

export const infoNav = createReducerWithFetch({
  types: FETCH_INFO_NAV.ALL
});

export const mainNav = createReducerWithFetch({
  types: FETCH_MAIN_NAV.ALL
});

export const catalogFilters = createReducerWithFetch({
  types: FETCH_CATALOG_FILTERS.ALL
});

export const catalogProducts = createReducerWithKeys({
  types: FETCH_CATALOG_PRODUCTS.ALL,
  reducer: createReducerWithFetch({
    types: FETCH_CATALOG_PRODUCTS.ALL,
    getPaginationFromAction: (action) => action.pagination
  })
});
