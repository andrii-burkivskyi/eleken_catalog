import { List } from 'immutable';

const defaultList = new List();

export default function navItemsDenormalize(navItemsEntities, navItemsResults) {
  if (!navItemsResults) { return defaultList; }

  return navItemsResults.map((navItem) => navItemsEntities.get(navItem));
}
