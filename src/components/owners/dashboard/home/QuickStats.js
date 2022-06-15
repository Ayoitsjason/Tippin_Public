import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOwnerCoupons } from "../../../../actions/owners";
import { getAllCustomersByBusiness } from "../../../../actions/customers";
import { getCurrentTimestamp } from "../../../../utils/helper.js";

const DashboardHome = ({
  getOwnerCoupons,
  getAllCustomersByBusiness,
  owner,
  coupons,
  customers,
}) => {
  useEffect(() => {
    if (owner) {
      getOwnerCoupons(owner._id);
      getAllCustomersByBusiness(owner.business);
    }
  }, [getOwnerCoupons, getAllCustomersByBusiness, owner]);

  const getNumberOfAvailableCoupons = () => {
    let totalAvailableCoupons = 0;
    if (coupons.length > 0) {
      coupons.forEach((coupon) => {
        if (!coupon.redeemed) totalAvailableCoupons++;
      });
    }
    return totalAvailableCoupons;
  };

  const getNumberOfUsedCoupons = () => {
    let totalUsedCoupons = 0;
    if (coupons.length > 0) {
      coupons.forEach((coupon) => {
        if (coupon.redeemed) totalUsedCoupons++;
      });
    }
    return totalUsedCoupons;
  };

  const getNumberOfCustomers = () => {
    return customers.length;
  };

  const getNumberOfCheckins = () => {
    let totalCheckins = 0;
    if (customers) {
      customers.forEach((customer) => {
        totalCheckins += customer.checkins.length;
      });
    }
    return totalCheckins;
  };

  const getTodaysNumberOfCheckins = () => {
    const { date } = getCurrentTimestamp();
    let totalCheckins = 0;
    if (customers) {
      customers.forEach((customer) => {
        customer.checkins.forEach((checkin) => {
          if (checkin.date === date) totalCheckins++;
        });
      });
    }
    return totalCheckins;
  };

  return (
    <div className="dashboard-container__main-home">
      <div className="dashboard-container__main-home__description">
        <h5>Quick Stats</h5>
      </div>
      <div className="dashboard-container__main-home__quickstats">
        <div className="dashboard-container__main-home__quickstat">
          <div className="dashboard-container__main-home__quickstat-header">
            <h5 className="quickstat-description">Customers</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person quickstat-description"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
            </svg>
          </div>
          <div className="quickstat-items">
            <div className="quickstat-item">
              <p className="quickstat-item__total-customers">
                {getNumberOfCustomers()}
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container__main-home__quickstat">
          <div className="dashboard-container__main-home__quickstat-header">
            <h5 className="quickstat-description">Checkins</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-check2-square quickstat-description"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"></path>
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
            </svg>
          </div>
          <div className="quickstat-items">
            <div className="quickstat-item">
              <p className="quickstat-item__today-checkin__customer">
                {getTodaysNumberOfCheckins()}
              </p>
              <p className="quickstat-item__total-checkin__customer">
                All Time: {getNumberOfCheckins()}
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container__main-home__quickstat">
          <div className="dashboard-container__main-home__quickstat-header">
            <h5 className="quickstat-description">Coupons</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-ticket-perforated quickstat-description"
              viewBox="0 0 16 16"
            >
              <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"></path>
              <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"></path>
            </svg>
          </div>
          <div className="quickstat-items">
            <div className="quickstat-item">
              <p className="quickstat-item__coupons-available">
                {getNumberOfAvailableCoupons()}
              </p>
              <p className="quickstat-item__coupons-redeemed">
                Redeemed: {getNumberOfUsedCoupons()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardHome.propTypes = {
  owner: PropTypes.object,
  coupons: PropTypes.array,
  getOwnerCoupons: PropTypes.func,
  getAllCustomersByBusiness: PropTypes.func,
};

const mapStateToProps = (state) => ({
  owner: state.ownerAuth.owner,
  coupons: state.owners.coupons,
  customers: state.customers,
});

export default connect(mapStateToProps, {
  getOwnerCoupons,
  getAllCustomersByBusiness,
})(DashboardHome);
