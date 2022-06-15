import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setRole } from "../../actions/role.js";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Radios = ({ isAuthenticated, setRole }) => {
  useEffect(() => {
    setRole("Owner");
  }, [setRole]);

  const [radioValue, setRadioValue] = useState("Owner");

  const radios = [{ name: "Owner" }, { name: "Customer" }];

  const userChoiceButtons = !isAuthenticated ? (
    <div id="landing-roles__button">
      <ButtonGroup>
        {radios.map((radio, id) => (
          <ToggleButton
            key={id}
            id={`radio-${id}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.name}
            checked={radioValue === radio.name}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={(e) => setRole(e.target.firstChild.nodeValue)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  ) : null;

  return <Fragment>{userChoiceButtons}</Fragment>;
};

Radios.propTypes = {
  isAuthenticated: PropTypes.bool,
  setRole: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.ownerAuth.isAuthenticated,
});

export default connect(mapStateToProps, { setRole })(Radios);
