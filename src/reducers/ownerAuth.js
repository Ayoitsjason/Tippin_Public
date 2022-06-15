import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  OWNER_CONFIRM_SUCCESS,
  OWNER_CONFIRM_FAIL,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  owner: null,
  confirmed: false,
};

export default function ownerAuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OWNER_CONFIRM_SUCCESS:
      return {
        ...state,
        confirmed: true,
      };
    case OWNER_CONFIRM_FAIL:
      return {
        ...state,
        confirmed: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        owner: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        owner: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
