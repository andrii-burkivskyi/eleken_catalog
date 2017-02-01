import getFetchActions from 'utils/getFetchActions.js';

export const FETCH_CATALOG_FILTERS = getFetchActions('FETCH_CATALOG_FILTERS');
export const FETCH_CATALOG_PRODUCTS = getFetchActions('FETCH_CATALOG_PRODUCTS');

export function fetchCatalogFilters() {
  return { type: FETCH_CATALOG_FILTERS.REQUEST };
}

export function fetchCatalogProducts(key, page) {
  return { type: FETCH_CATALOG_PRODUCTS.REQUEST, key, page };
}
