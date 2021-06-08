import types from './constants';

const INITIAL_STATE = {
  isLoading: true,
  current: null,
  data: {},
  order: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.SET_CURRENT: {
      const { filmId } = payload;
      return {
        ...state,
        current: filmId,
      };
    }
    case types.FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.FETCH_SUCCESS: {
      const { data, order } = payload;

      return {
        ...state,
        isLoading: false,
        order,
        data: {
          ...state.data,
          ...data,
        },
      };
    }
    case types.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
