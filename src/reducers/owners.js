import {
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  GETCUSTOMER_SUCCESS,
  GETCUSTOMER_FAIL,
  MESSAGE_SAVE_SUCCESSS,
  MESSAGE_SAVE_FAIL,
  COUPON_SAVE_SUCCESS,
  COUPON_SAVE_FAIL,
  COUPON_DELETE_SUCCESS,
  COUPON_DELETE_FAIL,
  GETOWNER_COUPONS_SUCCESS,
  GETOWNER_COUPONS_FAIL,
  COUPON_USE_SUCCESS,
  COUPON_USE_FAIL,
} from "../actions/types";

const initialState = {
  selectedCustomer: null,
  coupons: [],
};

export default function ownerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETCUSTOMER_SUCCESS:
      return { ...state, selectedCustomer: payload };
    case GETOWNER_COUPONS_SUCCESS:
    case COUPON_SAVE_SUCCESS:
    case COUPON_DELETE_SUCCESS:
    case COUPON_USE_SUCCESS:
      return { ...state, coupons: payload };
    case MESSAGE_SAVE_SUCCESSS:
    case MESSAGE_SUCCESS:
      return { ...state };
    case GETOWNER_COUPONS_FAIL:
    case COUPON_USE_FAIL:
    case MESSAGE_FAIL:
    case MESSAGE_SAVE_FAIL:
    case GETCUSTOMER_FAIL:
    case COUPON_SAVE_FAIL:
    case COUPON_DELETE_FAIL:
      return { ...state };
    default:
      return state;
  }
}
