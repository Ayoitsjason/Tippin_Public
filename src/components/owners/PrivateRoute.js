import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: RouteComponent,
  isAuthenticated,
  loading,
}) => {
  if (!isAuthenticated && loading) {
    return <Navigate replace to="/owner/login" />;
  }

  if (isAuthenticated && !loading) {
    return <RouteComponent />;
  }

  return <Navigate replace to="/owner/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.ownerAuth.isAuthenticated,
  loading: state.ownerAuth.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
