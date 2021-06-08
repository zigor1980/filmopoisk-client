import types from './constants';
import API from '../../api';

const checkAuth = () => async (dispatch) => {
  try {
    const { data } = await API.checkAuth();
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user: data,
      },
    });
  } catch (error) {
    dispatch({ type: types.LOGOUT, payload: error });
  }
};

const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_PENDING });

  try {
    const { data } = await API.login(email, password);
    const { accessToken, user } = data;
    localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user,
      },
    });
  } catch (error) {
    dispatch({ type: types.LOGIN_ERROR, payload: error });
  }
};

const signUp = (userData) => async (dispatch) => {
  dispatch({ type: types.LOGIN_PENDING });

  try {
    const { data } = await API.signUp(userData);
    const { accessToken, user } = data;
    localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user,
      },
    });
  } catch (error) {
    dispatch({ type: types.LOGIN_ERROR, payload: error });
  }
};

export default {
  login,
  signUp,
  checkAuth,
};
