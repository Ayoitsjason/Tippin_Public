import axios from "axios";
import { setAlert } from "./alert.js";
import {
  CHECKIN_SUCCESS,
  CHECKIN_FAIL,
  COUPON_SEND_SUCCESS,
  COUPON_SEND_FAIL,
  COUPON_SAVE_SUCCESS,
  COUPON_SAVE_FAIL,
} from "./types";

const saveCouponToOwnerDatabase =
  (customersNumber, ownerId, couponId) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      customersNumber,
      ownerId,
      couponId,
      redeemed: false,
    });

    try {
      const res = await axios.put(
        process.env.REACT_APP_BACKEND_URL + "/owner/couponSave",
        body,
        config
      );

      dispatch({
        type: COUPON_SAVE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(
          setAlert("Coupon not saved, Please let cashier know.", "danger")
        );
      }

      dispatch({
        type: COUPON_SAVE_FAIL,
      });
    }
  };

const sendCouponToCustomer =
  (businessName, customersNumber, ownerId) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ businessName, number: customersNumber });

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/twilio/coupon",
        body,
        config
      );

      dispatch(setAlert("You have received a coupon!", "success"));

      dispatch(saveCouponToOwnerDatabase(customersNumber, ownerId, res.data));

      dispatch({
        type: COUPON_SEND_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const error = err.response.data;

      if (error) {
        dispatch(setAlert(error.message), "danger");
      }

      dispatch({
        type: COUPON_SEND_FAIL,
      });
    }
  };

const checkCustomerCouponEligibility =
  (businessName, customer, ownerId) => async (dispatch) => {
    if (customer) {
      const customersNumber = "+1" + customer.number;
      if (
        customer.checkins.length === 10 ||
        customer.checkins.length % 10 === 0
      ) {
        dispatch(sendCouponToCustomer(businessName, customersNumber, ownerId));
      }
    }
  };

export const checkIn = (businessName, number, ownerId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ number });

  try {
    const res = await axios.put(
      process.env.REACT_APP_BACKEND_URL + "/customer/checkin",
      body,
      config
    );

    dispatch(setAlert("Checked In!", "success"));

    dispatch(checkCustomerCouponEligibility(businessName, res.data, ownerId));

    dispatch({
      type: CHECKIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response.data;

    if (error) {
      dispatch(setAlert(error.message, "danger"));
    }

    dispatch({
      type: CHECKIN_FAIL,
    });
  }
};
