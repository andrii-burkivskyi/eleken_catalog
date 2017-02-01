import { Schema, arrayOf } from 'normalizr';

const catalogFilter = new Schema('catalogFilters', { idAttribute: 'slug' });
const product = new Schema('products');

export const CATALOG_FILTERS = arrayOf(catalogFilter);
export const PRODUCTS = arrayOf(product);
