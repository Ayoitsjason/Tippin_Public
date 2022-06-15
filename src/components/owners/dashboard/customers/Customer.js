import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCustomer } from "../../../../actions/customers.js";
import MessagesFormHook from "../messages/MessagesFormHook.js";
import BackdropHook from "../../../../uiElements/BackdropHook.js";
import { toggleBool } from "../../../../utils/helper.js";

const Customer = ({ customer, deleteCustomer }) => {
  const [messageFormOpen, setMessageFormOpen] = React.useState(false);
  const [backdropOpen, setBackdropOpen] = React.useState(false);

  const { _id } = customer;

  const onClickDeleteUser = () => {
    deleteCustomer(_id);
  };

  const onClickMessageUser = () => {
    setBackdropOpen(toggleBool(messageFormOpen));
    setMessageFormOpen(toggleBool(messageFormOpen));
  };

  const onClickEmailUser = () => {};

  return (
    <Fragment>
      {backdropOpen ? (
        <BackdropHook
          setBackdropOpen={setBackdropOpen}
          backdropOpen={backdropOpen}
          setMessageFormOpen={setMessageFormOpen}
          messageFormOpen={messageFormOpen}
        />
      ) : null}
      {messageFormOpen ? (
        <MessagesFormHook
          customer={customer}
          setBackdropOpen={setBackdropOpen}
          backdropOpen={backdropOpen}
          setMessageFormOpen={setMessageFormOpen}
          messageFormOpen={messageFormOpen}
        />
      ) : null}
      <li className="customer-list__item">
        <div className="customer-list__item-description">
          <p>Name: {customer.name}</p>
          <p>Phone: {customer.number}</p>
          <p>Email: {customer.email}</p>
          <p>Checkins: {customer.checkins.length}</p>
        </div>
        <div className="customer-list__item-description__icons">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onClickMessageUser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onClickEmailUser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onClickDeleteUser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </li>
    </Fragment>
  );
};

Customer.propTypes = {
  deleteCustomer: PropTypes.func.isRequired,
};

export default connect(null, { deleteCustomer })(Customer);
