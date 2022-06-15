import React, { Fragment } from "react";

const BusinessList = ({ businesses, isAuthenticated, owner }) => {
  const renderBusinesses = businesses.map((business) => {
    return (
      <option key={business._id} value={business.business}>
        {business.business}
      </option>
    );
  });

  return (
    <Fragment>
      {isAuthenticated ? (
        <option value={owner.business}>{owner.business}</option>
      ) : (
        <Fragment>
          <option value="">Select a business</option>
          {renderBusinesses}
        </Fragment>
      )}
    </Fragment>
  );
};

export default BusinessList;
