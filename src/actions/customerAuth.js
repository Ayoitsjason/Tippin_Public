import {
  CUSTOMER_REGISTER_FAIL,
  CUSTOMER_REGISTER_SUCCESS,
  SET_SUCCESS_SUCCESS,
  SET_SUCCESS_FAIL,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const setSuccess = (boolean) => (dispatch) => {
  if (boolean === true || boolean === false) {
    dispatch({
      type: SET_SUCCESS_SUCCESS,
      payload: boolean,
    });
  } else {
    dispatch({
      type: SET_SUCCESS_FAIL,
    });
  }
};

export const register =
  ({ name, business, email, number }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, business, email, number });

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/customer/register",
        body,
        config
      );

      dispatch({
        type: CUSTOMER_REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(setSuccess(false));

      dispatch(setAlert("You are registered!", "success"));
    } catch (err) {
      const error = err.response.data;
      if (error) {
        dispatch(setAlert(error.message, "danger"));
      }

      dispatch({
        type: CUSTOMER_REGISTER_FAIL,
      });
    }
  };
