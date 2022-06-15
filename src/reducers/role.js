import {
  SETROLE_SUCCESS,
  SETROLE_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = null;

export default function roleReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SETROLE_SUCCESS:
      return (state = payload);
    case SETROLE_FAIL:
      return state;
    case LOGOUT_SUCCESS:
      return (state = null);
    default:
      return state;
  }
}
