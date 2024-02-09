import types from './types';

const zonaReducer = (state, action) => {
    switch (action.type) {
        case types.addZona:
            return [action.zona];
        default:
          return state;
      }
}

export default zonaReducer;
