import types from './constants';
import API from '../../api';

const getById = (userId) => async (dispatch) => {
  dispatch({ type: types.FETCH_PENDING });

  try {
    const { data: user } = await API.getUserById(userId);

    dispatch({
      type: types.FETCH_SUCCESS,
      payload: {
        order: [],
        data: {
          [user.id]: user,
        },
      },
    });
  } catch (error) {
    dispatch({ type: types.FETCH_ERROR, payload: error });
  }
};

export default {
  getById,
};
