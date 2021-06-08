import types from './constants';
import API from '../../api';

function formatFilm(film) {
  const formattedUsers = film.Users.reduce((result, user) => {
    const buf = result;
    const { Rating, ...restUser } = user;
    buf.Users.push({
      ...restUser,
      rate: Rating.rate,
    });

    buf.rating += Rating.rate;

    return buf;
  }, {
    Users: [],
    rating: 0,
  });

  return {
    ...film,
    Users: formattedUsers.Users,
    rating: formattedUsers.rating / formattedUsers.Users.length,
  };
}

const getById = (filmId) => async (dispatch) => {
  dispatch({ type: types.FETCH_PENDING });

  try {
    const { data: film } = await API.getFilmById(filmId);

    dispatch({
      type: types.FETCH_SUCCESS,
      payload: {
        order: [],
        data: {
          [film.id]: formatFilm(film),
        },
      },
    });
  } catch (error) {
    dispatch({ type: types.FETCH_ERROR, payload: error });
  }
};

const fetchFilms = () => async (dispatch) => {
  dispatch({ type: types.FETCH_PENDING });

  try {
    const { data } = await API.fetchFilms();
    dispatch({
      type: types.FETCH_SUCCESS,
      payload: {
        ...data.reduce((result, film) => {
          const buf = result;
          buf.order.push(film.id);
          buf.data[film.id] = film;

          return buf;
        }, {
          order: [],
          data: {},
        }),
      },
    });
  } catch (error) {
    dispatch({ type: types.FETCH_ERROR, payload: error });
  }
};

const rateFilm = (filmId, rate) => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: types.FETCH_PENDING });
  const userId = state.auth.user.id;
  try {
    const { data } = await API.rateFilm(userId, filmId, rate);
    const formattedFilm = formatFilm(data);
    dispatch({
      type: types.FETCH_SUCCESS,
      payload: {
        order: [],
        data: {
          [formattedFilm.id]: formattedFilm,
        },
      },
    });
  } catch (error) {
    dispatch({ type: types.FETCH_ERROR, payload: error });
  }
};

export default {
  getById,
  fetchFilms,
  rateFilm,
};
