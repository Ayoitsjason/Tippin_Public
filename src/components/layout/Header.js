import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/ownerAuth.js";
import PropTypes from "prop-types";

const Header = ({ signOut, loading, isAuthenticated, role }) => {
  const ownerAuthLinks = (
    <Fragment>
      <span className="primary-button">
        <Link to="/owner/dashboard/home">Dashboard</Link>
      </span>
      <span className="primary-button">
        <Link to="/owner/checkin">Checkin</Link>
      </span>
      <span className="primary-button">
        <Link onClick={signOut} to="/">
          Logout
        </Link>
      </span>
    </Fragment>
  );

  const ownerGuestLinks = (
    <Fragment>
      <span className="primary-button">
        <Link to="/owner/register">Register</Link>
      </span>
      <span className="primary-button">
        <Link to="/owner/login">Login</Link>
      </span>
    </Fragment>
  );

  const customerGuestLinks = (
    <Fragment>
      <span className="primary-button">
        <Link to="/customer/register">Register</Link>
      </span>
    </Fragment>
  );

  const portalLinks = () => {
    switch (role) {
      case "Customer":
        return customerGuestLinks;
      case "Owner":
        return (
          !loading && (
            <Fragment>
              {isAuthenticated ? ownerAuthLinks : ownerGuestLinks}
            </Fragment>
          )
        );
      default:
        return (
          !loading && (
            <Fragment>
              {isAuthenticated ? ownerAuthLinks : ownerGuestLinks}
            </Fragment>
          )
        );
    }
  };

  return (
    <section className="header-container">
      <div className="header-container__inner">
        <nav className="navigation-container">
          <div className="navigation-links">
            <Link to="/">
              <span className="logo">Tippin</span>
            </Link>
          </div>
          <div className="navigation-links">{portalLinks()}</div>
        </nav>
      </div>
    </section>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  role: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.ownerAuth.loading,
  isAuthenticated: state.ownerAuth.isAuthenticated,
  role: state.role,
});

export default connect(mapStateToProps, { signOut })(Header);
