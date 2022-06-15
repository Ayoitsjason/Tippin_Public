import {
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAIL,
  SET_SUCCESS_SUCCESS,
  SET_SUCCESS_FAIL,
} from "../actions/types";

const initialState = {
  customer: null,
  success: false,
};

export default function customerAuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CUSTOMER_REGISTER_SUCCESS:
      return {
        customer: payload,
        success: true,
      };
    case CUSTOMER_REGISTER_FAIL:
      return { ...state, success: false };
    case SET_SUCCESS_SUCCESS:
      return {
        ...state,
        success: payload,
      };
    case SET_SUCCESS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
