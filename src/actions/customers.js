import axios from "axios";
import { setAlert } from "./alert.js";
import {
  GETALLCUSTOMERS_SUCCESS,
  GETALLCUSTOMERS_FAIL,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
} from "./types";

export const getAllCustomersByBusiness = (business) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const params = {
    params: {
      business: business,
    },
  };

  try {
    const res = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/customer/customers",
      params,
      config
    );

    dispatch({
      type: GETALLCUSTOMERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("No Customers Registered", "danger"));
    }

    dispatch({
      type: GETALLCUSTOMERS_FAIL,
    });
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const deletedUser = await axios.delete(
      process.env.REACT_APP_BACKEND_URL + `/customer/delete?_id=${id}`
    );

    dispatch({
      type: CUSTOMER_DELETE_SUCCESS,
      payload: deletedUser.data,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("Could not delete user", "danger"));
    }

    dispatch({
      type: CUSTOMER_DELETE_FAIL,
    });
  }
};
