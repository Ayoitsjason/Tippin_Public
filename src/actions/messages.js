import axios from "axios";
import {
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  MESSAGE_SAVE_SUCCESSS,
  MESSAGE_SAVE_FAIL,
} from "./types";
import { setAlert } from "./alert";

export const saveCustomerMessage = (_id, message) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    _id,
    message,
    type: "outgoing",
  });

  try {
    await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/customer/message",
      body,
      config
    );

    dispatch({
      type: MESSAGE_SAVE_SUCCESSS,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("Unable to save message", "danger"));
    }

    dispatch({
      type: MESSAGE_SAVE_FAIL,
    });
  }
};

export const message = (_id, number, message) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ number, message });

  try {
    await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/twilio/message",
      body,
      config
    );

    dispatch(setAlert("Message sent", "success"));

    dispatch({
      type: MESSAGE_SUCCESS,
    });

    dispatch(saveCustomerMessage(_id, message));
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("Unable to send message", "danger"));
    }

    dispatch({
      type: MESSAGE_FAIL,
    });
  }
};
