import types from './types'

const lugaresContratadosReducer = (state, action) => {
    switch (action.type) {
        case types.addLugar:
            return [...state, action.lugar];
        case types.deleteLugar:
            return state.filter(lugar => lugar !== action.lugar);
        default:
          return state;
      }
}

export default lugaresContratadosReducer