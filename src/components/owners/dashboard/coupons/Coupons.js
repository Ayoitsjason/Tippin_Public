import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOwnerCoupons } from "../../../../actions/owners";
import Coupon from "./Coupon.js";

const Coupons = ({ owner, getOwnerCoupons, coupons }) => {
  useEffect(() => {
    getOwnerCoupons(owner._id);
  }, [getOwnerCoupons, owner._id]);

  const renderCoupons = coupons.map((coupon) => {
    return <Coupon key={coupon.couponId} coupon={coupon} ownerId={owner._id} />;
  });

  return (
    <div className="coupon-container">
      <h5>Coupons</h5>
      <ul className="coupon-list">
        {coupons.length > 0 ? (
          renderCoupons
        ) : (
          <h6 style={{ display: "flex", alignSelf: "center" }}>
            No coupons...
          </h6>
        )}
      </ul>
    </div>
  );
};

Coupons.propTypes = {
  owner: PropTypes.object.isRequired,
  coupons: PropTypes.array,
  getOwnerCoupons: PropTypes.func,
};

const mapStateToProps = (state) => ({
  owner: state.ownerAuth.owner,
  coupons: state.owners.coupons,
});

export default connect(mapStateToProps, { getOwnerCoupons })(Coupons);
