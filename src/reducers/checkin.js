import { CHECKIN_SUCCESS, CHECKIN_FAIL } from "../actions/types";

const initialState = {
  customer: null,
};

export default function checkinReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHECKIN_SUCCESS:
      return {
        customer: payload,
      };
    case CHECKIN_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
