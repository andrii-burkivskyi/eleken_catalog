import getFetchActions from 'utils/getFetchActions.js';

export const FETCH_INFO_NAV = getFetchActions('FETCH_INFO_NAV');
export const FETCH_MAIN_NAV = getFetchActions('FETCH_MAIN_NAV');

export function fetchInfoNav() {
  return { type: FETCH_INFO_NAV.REQUEST };
}

export function fetchMainNav() {
  return { type: FETCH_MAIN_NAV.REQUEST };
}
