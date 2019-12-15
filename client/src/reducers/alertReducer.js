import { SET_ALERT, CLEAR_ALERT } from '../actions/types';

const initialState = {
  alerts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload]
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alerts: []
      };
    default:
      return state;
  }
};
