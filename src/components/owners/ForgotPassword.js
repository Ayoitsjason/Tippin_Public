import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { forgotPassword } from "../../actions/ownerAuth.js";

const ForgotPassword = ({ forgotPassword }) => {
  const [email, setEmail] = React.useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email);
    setEmail("");
  };

  return (
    <section className="login-container">
      <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <h2 className="u-margin-bottom-small">Forgot Password</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  null: null,
});

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
