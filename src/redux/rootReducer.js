import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import genresReducer from './genres/reducer';
import filmsReducer from './films/reducer';
import usersReducer from './users/reducer';

export default function rootReducer() {
  return combineReducers({
    auth: authReducer,
    genres: genresReducer,
    films: filmsReducer,
    users: usersReducer,
  });
}
