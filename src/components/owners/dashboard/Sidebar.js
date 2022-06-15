import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <ul className="sidenav__list">
        <li>
          <Link to="/owner/dashboard/home">Home</Link>
        </li>
        <li>
          <Link to="/owner/dashboard/customers">Customers</Link>
        </li>
        <li>
          <Link to="/owner/dashboard/coupons">Coupons</Link>
        </li>
        <li>
          <Link to="/owner/dashboard/messages">Messages</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Sidebar;
