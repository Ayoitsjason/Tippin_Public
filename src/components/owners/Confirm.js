import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import backgroundVideo from "../../img/customer-preview.mp4";
import { confirmOwner } from "../../actions/ownerAuth";

const Welcome = ({ confirmOwner, confirmed }) => {
  const params = useParams();

  useEffect(() => {
    confirmOwner(params.confirmationCode);
  }, [confirmOwner, params]);

  const boolConfirmed = () => {
    if (confirmed) {
      return (
        <h1 className="heading-primary__text--main landing-confirmation--success">
          You are now confirmed!
        </h1>
      );
    } else if (!confirmed) {
      return (
        <h1 className="heading-primary__text--main landing-confirmation--fail">
          Could not confirm account. Please contact owner.
        </h1>
      );
    } else {
      return (
        <h1 className="heading-primary__text--main landing-confirmation--loading">
          Loading...
        </h1>
      );
    }
  };

  return (
    <section className="landing-container">
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
      <div className="landing-confirmation">{boolConfirmed()}</div>
    </section>
  );
};

Welcome.propTypes = {
  confirmOwner: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  confirmed: state.ownerAuth.confirmed,
});

export default connect(mapStateToProps, { confirmOwner })(Welcome);
