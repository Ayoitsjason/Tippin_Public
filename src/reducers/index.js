import { combineReducers } from "redux";
import alert from "./alert";
import ownerAuth from "./ownerAuth";
import customerAuth from "./customerAuth";
import checkin from "./checkin";
import customers from "./customers";
import role from "./role";
import businesses from "./businesses.js";
import owners from "./owners.js";

export default combineReducers({
  alert,
  ownerAuth,
  owners,
  customerAuth,
  checkin,
  customers,
  businesses,
  role,
});
