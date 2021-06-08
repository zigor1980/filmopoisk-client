import API from '../../api';
import types from './constants';

function fetchgenres() {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_PENDING,
    });

    try {
      const { data } = await API.fetchGenres();
      console.log(data);
      dispatch({
        type: types.FETCH_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.FETCH_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export default {
  fetchgenres,
};
