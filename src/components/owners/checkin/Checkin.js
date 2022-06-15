import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setAlert } from "../../../actions/alert";
import { checkIn } from "../../../actions/checkin";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setRole } from "../../../actions/role.js";

const Checkin = ({ setAlert, checkIn, setRole, owner }) => {
  useEffect(() => {
    setRole("Owner");
  }, [setRole]);

  const [keypad, setKeypad] = useState([]);

  const keypadChoice = (e) => {
    e.preventDefault();
    if (keypad.length !== 10) {
      setKeypad([...keypad, e.currentTarget.value]);
    }
  };

  const keypadChoiceDelete = (e) => {
    e.preventDefault();
    if (keypad.length !== 0) setKeypad(keypad.slice(0, -1));
  };

  const resetKeypad = () => setKeypad([]);

  const submitNumber = (e) => {
    e.preventDefault();
    if (keypad.length === 10) {
      const userNumber = keypad.join("");
      checkIn(owner.business, parseInt(userNumber), owner._id);
      resetKeypad();
    } else {
      setAlert("Invalid Number", "danger");
    }
  };

  return (
    <section className="checkin-container">
      <h3>Checkin</h3>
      <form className="checkin-container__form">
        <div className="checkin-container__form--numberInput-container">
          {keypad[0] ? (
            <span className="numberInput-active">{keypad[0]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[1] ? (
            <span className="numberInput-active">{keypad[1]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[2] ? (
            <span className="numberInput-active">{keypad[2]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          <span className="numberInput-split">-</span>
          {keypad[3] ? (
            <span className="numberInput-active">{keypad[3]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[4] ? (
            <span className="numberInput-active">{keypad[4]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[5] ? (
            <span className="numberInput-active">{keypad[5]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          <span className="numberInput-split">-</span>
          {keypad[6] ? (
            <span className="numberInput-active">{keypad[6]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[7] ? (
            <span className="numberInput-active">{keypad[7]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[8] ? (
            <span className="numberInput-active">{keypad[8]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
          {keypad[9] ? (
            <span className="numberInput-active">{keypad[9]}</span>
          ) : (
            <span className="numberInput"></span>
          )}
        </div>
        <div
          className="checkin-container__form--keypad-container"
          name="keypad"
          value={keypad}
        >
          <div id="line-one" className="numberline">
            <div className="numberline-content">
              <button onClick={keypadChoice} value="1">
                <span onClick={() => {}} className="numberline-content__number">
                  1
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="2">
                <span onClick={() => {}} className="numberline-content__number">
                  2
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="3">
                <span onClick={() => {}} className="numberline-content__number">
                  3
                </span>
              </button>
            </div>
          </div>
          <div id="line-two" className="numberline">
            <div className="numberline-content">
              <button onClick={keypadChoice} value="4">
                <span onClick={() => {}} className="numberline-content__number">
                  4
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="5">
                <span onClick={() => {}} className="numberline-content__number">
                  5
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="6">
                <span onClick={() => {}} className="numberline-content__number">
                  6
                </span>
              </button>
            </div>
          </div>
          <div id="line-three" className="numberline">
            <div className="numberline-content">
              <button onClick={keypadChoice} value="7">
                <span onClick={() => {}} className="numberline-content__number">
                  7
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="8">
                <span onClick={() => {}} className="numberline-content__number">
                  8
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="9">
                <span onClick={() => {}} className="numberline-content__number">
                  9
                </span>
              </button>
            </div>
          </div>
          <div id="line-four" className="numberline">
            <div className="numberline-content">
              <button onClick={keypadChoiceDelete}>
                <span className="numberline-content__number__no-line">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-backspace"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={keypadChoice} value="0">
                <span onClick={() => {}} className="numberline-content__number">
                  0
                </span>
              </button>
            </div>
            <div className="numberline-content">
              <button onClick={submitNumber}>
                <span
                  onClick={() => {}}
                  className="numberline-content__number__no-line"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-forward"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.51.51 0 0 1 .042-.028.147.147 0 0 0 0-.252.51.51 0 0 1-.042-.028L9.502 5.513zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3v-.503z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <p className="checkin-container__register">
            Don't have an account? <Link to="/customer/register">Register</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

Checkin.propTypes = {
  setAlert: PropTypes.func.isRequired,
  checkIn: PropTypes.func.isRequired,
  owner: PropTypes.object,
};

const mapStateToProps = (state) => ({
  owner: state.ownerAuth.owner,
});

export default connect(mapStateToProps, { setAlert, checkIn, setRole })(
  Checkin
);
