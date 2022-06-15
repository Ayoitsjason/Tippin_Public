import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Dashboard = ({ owner }) => {
  return (
    <section className="dashboard-container">
      <div className="dashboard-container__header">
        <h3>Dashboard</h3>
        {owner === null ? null : <h6>Hello {owner.name}</h6>}
        {owner === null ? null : <h6>Business: {owner.business}</h6>}
      </div>
      <div className="dashboard-container__sidenav">
        <Sidebar />
      </div>
      <div className="dashboard-container__main">
        <Outlet />
      </div>
      <footer className="dashboard-container__footer">
        <Footer />
      </footer>
    </section>
  );
};

Dashboard.propTypes = {
  owner: PropTypes.object,
};

const mapStateToProps = (state) => ({
  owner: state.ownerAuth.owner,
});

export default connect(mapStateToProps)(Dashboard);
