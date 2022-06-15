import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllCustomersByBusiness } from "../../../../actions/customers.js";
import Customer from "./Customer.js";

const Users = ({ owner, customers, getAllCustomersByBusiness }) => {
  useEffect(() => {
    getAllCustomersByBusiness(owner.business);
  }, [getAllCustomersByBusiness, owner.business]);

  const renderList = customers.map((customer) => {
    return <Customer key={customer._id} customer={customer} />;
  });

  return (
    <div className="customer-container">
      <h5>Customers</h5>
      <ul className="customer-list">
        {customers.length > 0 ? renderList : null}
      </ul>
    </div>
  );
};

Users.propTypes = {
  owner: PropTypes.object.isRequired,
  getAllCustomersByBusiness: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  owner: state.ownerAuth.owner,
  customers: state.customers,
});

export default connect(mapStateToProps, { getAllCustomersByBusiness })(Users);
