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
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken.js";
import axios from "axios";

export const resetPassword =
  ({ password, passwordResetToken }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ password, passwordResetToken });

    try {
      await axios.put(
        process.env.REACT_APP_BACKEND_URL + "/owner/resetpassword",
        body,
        config
      );
      dispatch(setAlert("Password Reset!", "success"));
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(setAlert(error.message, "danger"));
      }
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/owner/forgotpassword",
      body,
      config
    );

    dispatch(
      setAlert(
        "An email has been sent with instructions on how to reset your password",
        "success"
      )
    );
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert(error.message, "danger"));
    }
  }
};

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/owner/login",
        body,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(setAlert(error.message, "danger"));
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const signOut = () => (dispatch) => {
  if (localStorage.token) {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } else {
    dispatch({
      type: LOGOUT_FAIL,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/owner/auth"
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register =
  ({ name, email, password, business, image = "na" }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password, business, image });

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/owner/register",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert("You are Registered!", "success"));
      dispatch(setAlert("Please wait for confirmation.", "success"));
      dispatch(loadUser());
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(setAlert(error.message, "danger"));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const confirmOwner = (confirmationCode) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ confirmationCode });

  try {
    await axios.put(
      process.env.REACT_APP_BACKEND_URL + "/owner/auth/confirm",
      body,
      config
    );

    dispatch(setAlert("Confirmed!", "success"));

    dispatch({
      type: OWNER_CONFIRM_SUCCESS,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert(error.message, "danger"));
    }

    dispatch({
      type: OWNER_CONFIRM_FAIL,
    });
  }
};
