import {
  GETALLCUSTOMERS_SUCCESS,
  GETALLCUSTOMERS_FAIL,
  LOGOUT_SUCCESS,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
} from "../actions/types";

const initialState = [];

export default function customersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALLCUSTOMERS_SUCCESS:
      return [...payload];
    case GETALLCUSTOMERS_FAIL:
    case CUSTOMER_DELETE_FAIL:
      return [...state];
    case CUSTOMER_DELETE_SUCCESS:
      return state.filter((customer) => customer._id !== payload._id);
    case LOGOUT_SUCCESS:
      state.splice(0, state.length);
      return state;
    default:
      return state;
  }
}
