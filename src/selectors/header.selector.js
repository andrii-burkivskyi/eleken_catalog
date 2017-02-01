import { createSelector } from 'reselect';

import navItemsDenormalize from 'schema/header.denormalize.js';

const navItemsEntities = (state) => state.getIn(['entities', 'navItems']);

const infoNavResults = (state) => state.getIn(['infoNav', 'data']);
const mainNavResults = (state) => state.getIn(['mainNav', 'data']);

export const infoNavSelector = createSelector(
  navItemsEntities,
  infoNavResults,
  navItemsDenormalize
);

export const mainNavSelector = createSelector(
  navItemsEntities,
  mainNavResults,
  navItemsDenormalize
);
