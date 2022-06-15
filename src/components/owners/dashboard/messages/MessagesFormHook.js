import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import { message } from "../../../../actions/messages";
import { toggleBool } from "../../../../utils/helper";

const MessageFormHook = ({
  message,
  customer,
  setBackdropOpen,
  backdropOpen,
  setMessageFormOpen,
  messageFormOpen,
}) => {
  const { _id, number } = customer;
  const [textMessage, setTextMessage] = React.useState({
    num: number,
    body: "",
  });

  const { num, body } = textMessage;

  const onChange = (e) => {
    setTextMessage({ ...textMessage, [e.target.name]: e.target.value });
  };

  const formReset = () => {
    setTextMessage({ num: "", body: "" });
  };

  const onClickMessage = () => {
    const phoneNumber = "+1" + number;
    message(_id, phoneNumber, body);
    formReset();
    setMessageFormOpen(toggleBool(messageFormOpen));
    setBackdropOpen(toggleBool(backdropOpen));
  };

  const content = (
    <div className="messages-container__form-hook">
      <form>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" name="number" defaultValue={num} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="body"
            name="body"
            value={body}
            placeholder="Enter message"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button onClick={onClickMessage}>Send</Button>
      </form>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("messageForm-hook")
  );
};

export default connect(null, { message })(MessageFormHook);
