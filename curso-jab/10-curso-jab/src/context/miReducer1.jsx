import types from './types'

const miReducer1 = (state, action) => {
    switch (action.type) {
      case types.login:
        return {
          ...state,
          estado: true,
        };
      case types.logout:
        return {
          ...state,
          estado: false,
        };
      default:
        return state;
    }
};

export default miReducer1