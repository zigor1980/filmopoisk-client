import types from './constants';

const INITIAL_STATE = {
  isLoading: false,
  isLogged: true,
  user: null,
  error: null,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.LOGIN_PENDING: {
      return {
        isLoading: true,
        isLogged: false,
        user: null,
        error: null,
      };
    }
    case types.LOGIN_SUCCESS: {
      const { user } = payload;

      return {
        isLoading: false,
        isLogged: true,
        user,
      };
    }
    case types.LOGIN_ERROR: {
      const { error } = payload;
      return {
        isLoading: false,
        isLogged: false,
        user: null,
        error,
      };
    }
    case types.LOGOUT: {
      return {
        isLoading: false,
        isLogged: false,
        user: null,
      };
    }
    default:
      return state;
  }
}
