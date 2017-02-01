import { combineReducers } from 'redux-immutable';

import routing from 'reducers/routing.reducer.js';
import entities from 'reducers/entities.reducer.js';
import * as fetchReducers from 'reducers/fetch.reducer.js';

export default combineReducers({
  routing,
  entities,
  ...fetchReducers
});
