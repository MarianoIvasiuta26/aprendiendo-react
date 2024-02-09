import types from './types'

const miReducer2 = (state, action) => {
    switch (action.type) {
      case types.contratar:
        return {
          ...state,
          estadoContratado: true,
        };
      case types.anular:
        return {
          ...state,
          estadoContratado: false,
        };
      default:
        return state;
    }
};

export default miReducer2