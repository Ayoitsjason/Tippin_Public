import { GETALLBUSINESS_SUCCESS, GETALLBUSINESS_FAIL } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getAllBusiness = () => async (dispatch) => {
  try {
    const businesses = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/business/businesses"
    );

    dispatch({
      type: GETALLBUSINESS_SUCCESS,
      payload: businesses.data,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("No Businesses registered.", "danger"));
    }

    dispatch({
      type: GETALLBUSINESS_FAIL,
    });
  }
};
