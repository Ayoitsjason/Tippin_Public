import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSuccess } from "../../actions/customerAuth";
import Radios from "./Radios.js";
import backgroundVideo from "../../img/customer-preview.mp4";

const Landing = ({ isAuthenticated, setSuccess, role }) => {
  useEffect(() => {
    setSuccess(false);
  });

  const displayOwnerWebsiteFeatures = () => {
    return (
      <div className="website-features__owner">
        <div className="website-feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="currentColor"
            className="bi bi-person website-feature__pic"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
          </svg>
          <h2 className="secondary-header">Database</h2>
          <p className="secondary-text">
            Store all of your customers information in one place for easy
            access.
          </p>
        </div>
        <div className="website-feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="currentColor"
            className="bi bi-check2-square website-feature__pic"
            viewBox="0 0 16 16"
          >
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"></path>
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
          </svg>
          <h2 className="secondary-header">Checkins</h2>
          <p className="secondary-text">
            Checkin your customers to see how often they come in.
          </p>
        </div>
        <div className="website-feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="currentColor"
            className="bi bi-ticket-perforated website-feature__pic"
            viewBox="0 0 16 16"
          >
            <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"></path>
            <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"></path>
          </svg>
          <h2 className="secondary-header">Coupons</h2>
          <p className="secondary-text">
            Send your customers coupons for staying loyal to your business.
          </p>
        </div>
        <div className="website-feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="currentColor"
            className="bi bi-chat website-feature__pic"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
          <h2 className="secondary-header">Messaging</h2>
          <p className="secondary-text">
            Personally message your customer for appointment reminders and
            questions.
          </p>
        </div>
      </div>
    );
  };

  const displayCustomerWebsiteFeatures = () => {
    return (
      <div className="website-features__customer">
        <div className="website-feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="currentColor"
            className="bi bi-check2-square website-feature__pic"
            viewBox="0 0 16 16"
          >
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"></path>
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
          </svg>
          <h2 className="secondary-header">Checkins</h2>
          <p className="secondary-text">
            Checkin to your favorite store to receive special offers and
            notifications.
          </p>
        </div>
        <div className="website-feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="currentColor"
            className="bi bi-ticket-perforated website-feature__pic"
            viewBox="0 0 16 16"
          >
            <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"></path>
            <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"></path>
          </svg>
          <h2 className="secondary-header">Coupons</h2>
          <p className="secondary-text">
            Receive coupons from your favorite store.
          </p>
        </div>
      </div>
    );
  };

  const displayWebsiteFeatures = () => {
    if (role === "Customer") {
      return displayCustomerWebsiteFeatures();
    } else {
      return displayOwnerWebsiteFeatures();
    }
  };

  return (
    <Fragment>
      <section className="landing-container">
        <div className="landing">
          <div className="bg-video">
            <video
              className="bg-video__content"
              autoPlay="autoplay"
              muted
              loop="loop"
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser is not supported!
            </video>
          </div>
          <Radios />
          <div className="landing-textbox">
            <div className="heading-primary">
              <h1 className="heading-primary__text--main">Welcome to Tippin</h1>
              {!isAuthenticated ? (
                <p className="heading-primary__text--secondary">
                  Tippin will assist in customer retention and communication
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="website-features__container">
        {!isAuthenticated ? displayWebsiteFeatures() : null}
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  role: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.ownerAuth.isAuthenticated,
  role: state.role,
});

export default connect(mapStateToProps, { setSuccess })(Landing);
