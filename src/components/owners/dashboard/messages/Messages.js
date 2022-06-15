import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { getAllCustomersByBusiness } from "../../../../actions/customers";
import { message } from "../../../../actions/messages";

class Messages extends Component {
  constructor(props) {
    super(props);

    // Create WebSocket connection
    this.client = new W3CWebSocket(process.env.REACT_APP_BACKEND_WEBSOCKET);
    this.owner = this.props.owner;
    this.uniqueDates = {};
    this.messagesEndRef = React.createRef();
  }

  state = {
    currentSelectedCustomer: null,
    currentMessage: "",
    currentMessages: [],
  };

  checkUniqueDate = (date) => {
    if (this.uniqueDates[date]) {
      return false;
    } else {
      this.uniqueDates[date] = 1;
      return true;
    }
  };

  componentDidMount() {
    this.scrollToBottom();
    this.props.getAllCustomersByBusiness(this.owner.business);

    // Listen for messages
    this.client.onmessage = (message) => {
      this.props.getAllCustomersByBusiness(this.owner.business);
      const { From, Body, date, time } = JSON.parse(message.data);
      const slicedFromPhoneNumber = From.slice(2);
      const phoneNumberStringToNum = parseInt(slicedFromPhoneNumber);

      if (this.state.currentSelectedCustomer) {
        if (
          this.state.currentSelectedCustomer.number === phoneNumberStringToNum
        ) {
          this.setState({
            currentMessages: [
              ...this.state.currentMessages,
              { type: "incoming", message: Body, date, time },
            ],
          });
        }
      }
    };
  }

  componentDidUpdate() {
    this.uniqueDates = {};
    this.scrollToBottom();
  }

  componentWillUnmount() {
    this.client.close();
  }

  onClickSelectUser = (customer) => {
    this.setState({ currentSelectedCustomer: customer });
    this.setState({ currentMessages: customer.messages });
    this.props.getAllCustomersByBusiness(this.owner.business);
  };

  onSubmitMessage = (e) => {
    e.preventDefault();
    if (
      this.state.currentSelectedCustomer &&
      this.state.currentMessage !== ""
    ) {
      this.props.message(
        this.state.currentSelectedCustomer._id,
        this.state.currentSelectedCustomer.number,
        this.state.currentMessage
      );
      this.setState({
        currentMessages: [
          ...this.state.currentMessages,
          { type: "outgoing", message: this.state.currentMessage },
        ],
      });
    }
    this.setState({ currentMessage: "" });
  };

  scrollToBottom = () => {
    this.messagesEndRef.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const customers = this.props.customers;

    const renderUserWithMessages = customers.map((customer) => {
      return customer.messages.length > 0 ? (
        <li key={customer._id} onClick={() => this.onClickSelectUser(customer)}>
          <p className="messages-container__list-name">{customer.name}</p>
          <p className="messages-container__list-number">{customer.number}</p>
          <p className="messages-container__list-message">
            {customer.messages[customer.messages.length - 1].message}
          </p>
        </li>
      ) : null;
    });

    return (
      <div className="messages-container">
        <div className="messages-container__list">
          <h6>Messages</h6>
          <ul>{customers.length > 0 ? renderUserWithMessages : null}</ul>
        </div>
        <div className="messages-container__selected">
          <section className="messages-container__selected-header">
            <h3>
              {this.state.currentSelectedCustomer
                ? this.state.currentSelectedCustomer.name
                : null}
            </h3>
          </section>
          <section className="messages-container__selected-body">
            <ul className="messages-container__selected-body__items">
              {this.state.currentSelectedCustomer
                ? this.state.currentMessages.map((message) => {
                    return (
                      <Fragment key={uuidv4()}>
                        <p
                          style={{ alignSelf: "center", fontWeight: "lighter" }}
                        >
                          {this.checkUniqueDate(message.date)
                            ? message.date
                            : null}
                        </p>
                        <li
                          className={`messages-container__selected-body__item-${
                            message.type === "outgoing"
                              ? "outgoing"
                              : "incoming"
                          }`}
                        >
                          <p>{message.time}</p>
                          <p>{message.message}</p>
                        </li>
                      </Fragment>
                    );
                  })
                : null}
              <div
                ref={(el) => {
                  this.messagesEndRef = el;
                }}
              />
            </ul>
          </section>
          <section className="messages-container__selected-input">
            <form onSubmit={(e) => this.onSubmitMessage(e)}>
              <Form.Control
                className="messages-container__selected-input__text"
                type="text"
                name="messageInput"
                value={this.state.currentMessage}
                onChange={(e) => {
                  this.setState({ currentMessage: e.target.value });
                }}
                placeholder="Write a message..."
              />
              <button
                type="button"
                onClick={(e) => this.onSubmitMessage(e)}
                className="btn messages-container__selected-input__button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
                </svg>
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  getAllCustomersByBusiness: PropTypes.func,
  owner: PropTypes.object,
  customers: PropTypes.array,
  message: PropTypes.func,
};

const mapStateToProps = (state) => ({
  owner: state.ownerAuth.owner,
  customers: state.customers,
});

export default connect(mapStateToProps, {
  getAllCustomersByBusiness,
  message,
})(Messages);
