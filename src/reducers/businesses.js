import { GETALLBUSINESS_SUCCESS, GETALLBUSINESS_FAIL } from "../actions/types";

const initialState = [];

export default function businessesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALLBUSINESS_SUCCESS:
      return (state = payload);
    case GETALLBUSINESS_FAIL:
      return [...state];
    default:
      return state;
  }
}
