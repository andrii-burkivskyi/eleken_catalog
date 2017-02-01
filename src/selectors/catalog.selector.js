import { createSelector } from 'reselect';

import {
  catalogFiltersDenormalize,
  catalogProductsDenormalize
} from 'schema/catalog.denormalize.js';

const catalogFiltersEntities = (state) => state.getIn(['entities', 'catalogFilters']);
const catalogProductsEntities = (state) => state.getIn(['entities', 'products']);

const catalogFiltersResults = (state) => state.getIn(['catalogFilters', 'data']);
const catalogProductsResults = (state, key) => state.getIn(['catalogProducts', key, 'data']);

export const catalogFiltersSelector = createSelector( // eslint-disable-line
  catalogFiltersEntities,
  catalogFiltersResults,
  catalogFiltersDenormalize
);

export const catalogProductsSelector = createSelector(
  catalogProductsEntities,
  catalogProductsResults,
  catalogProductsDenormalize
);
