import {
  GETOWNER_COUPONS_SUCCESS,
  GETOWNER_COUPONS_FAIL,
  COUPON_DELETE_SUCCESS,
  COUPON_DELETE_FAIL,
  COUPON_USE_SUCCESS,
  COUPON_USE_FAIL,
  GETCUSTOMER_SUCCESS,
  GETCUSTOMER_FAIL,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const setSelectedCustomer = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const customer = await axios.get(
      process.env.REACT_APP_BACKEND_URL + `/customer/customer?_id=${id}`,
      config
    );

    dispatch({
      type: GETCUSTOMER_SUCCESS,
      payload: customer.data,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("Error getting user", "danger"));
    }

    dispatch({
      type: GETCUSTOMER_FAIL,
    });
  }
};

export const getOwnerCoupons = (_id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const params = {
    params: {
      _id: _id,
    },
  };

  try {
    const res = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/owner/coupons",
      params,
      config
    );

    dispatch({
      type: GETOWNER_COUPONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert("Could not get coupons", "danger"));
    }

    dispatch({
      type: GETOWNER_COUPONS_FAIL,
    });
  }
};

export const deleteCustomerCoupon =
  (ownersId, couponId) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        process.env.REACT_APP_BACKEND_URL +
          `/owner/coupons?ownersId=${ownersId}&couponId=${couponId}`,
        config
      );
      dispatch(setAlert("Coupon deleted", "success"));
      dispatch({
        type: COUPON_DELETE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(setAlert("Could not delete coupon", "danger"));
      }
      dispatch({
        type: COUPON_DELETE_FAIL,
      });
    }
  };

export const redeemCustomerCoupon =
  (ownersId, couponId, customersNumber, redeemed) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      ownersId,
      couponId,
      customersNumber,
      redeemed,
    });

    try {
      const res = await axios.put(
        process.env.REACT_APP_BACKEND_URL + "/owner/coupons",
        body,
        config
      );

      dispatch(setAlert("Successfully redeemed coupon", "success"));

      dispatch({
        type: COUPON_USE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(setAlert("Could not use coupon", "danger"));
      }

      dispatch({
        type: COUPON_USE_FAIL,
      });
    }
  };
