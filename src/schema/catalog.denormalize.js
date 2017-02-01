import { List } from 'immutable';

const defaultList = new List();

export function catalogFiltersDenormalize(catalogFiltersEntities, catalogFiltersResults) {
  if (!catalogFiltersResults) { return defaultList; }

  return catalogFiltersResults.map((filter) => catalogFiltersEntities.get(filter));
}

export function catalogProductsDenormalize(catalogProductsEntities, catalogProductsResults) {
  if (!catalogProductsResults) { return defaultList; }

  return catalogProductsResults.map((product) => catalogProductsEntities.get(product));
}
