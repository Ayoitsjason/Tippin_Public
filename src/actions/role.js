import { SETROLE_SUCCESS, SETROLE_FAIL } from "./types";

export const setRole = (role) => (dispatch) => {
  switch (role) {
    case "Customer":
      dispatch({
        type: SETROLE_SUCCESS,
        payload: role,
      });
      break;
    case "Owner":
      dispatch({
        type: SETROLE_SUCCESS,
        payload: role,
      });
      break;
    default:
      dispatch({
        type: SETROLE_FAIL,
      });
  }
};
