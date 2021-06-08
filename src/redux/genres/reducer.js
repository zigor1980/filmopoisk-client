import types from './constants';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_PENDING: {
      return {
        isLoading: true,
        data: [],
      };
    }
    case types.FETCH_SUCCESS: {
      const { data } = payload;

      return {
        isLoading: false,
        data,
      };
    }
    case types.LOGIN_ERROR: {
      return {
        isLoading: false,
        data: [],
      };
    }
    default:
      return state;
  }
}
