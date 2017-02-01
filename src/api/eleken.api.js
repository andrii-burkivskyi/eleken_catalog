import fetch from 'isomorphic-fetch';

const API_URL = 'https://raw.githubusercontent.com/andrii-burkivskyi/data/master';

function fetchInfoNav() {
  return fetch(`${API_URL}/eleken/infoNav.json`)
    .then((response) => response.json());
}

function fetchMainNav() {
  return fetch(`${API_URL}/eleken/mainNav.json`)
    .then((response) => response.json());
}

function fetchCatalogFilters() {
  return fetch(`${API_URL}/eleken/catalogFilter.json`)
    .then((response) => response.json());
}

function fetchCatalogProducts(filter, page = 1) {
  return fetch(`${API_URL}/eleken/catalog.${filter}.${page}.json`)
    .then((response) => response.json());
}

export default {
  fetchInfoNav,
  fetchMainNav,
  fetchCatalogFilters,
  fetchCatalogProducts
};
