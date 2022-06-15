import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import { setAlert } from "../../actions/alert.js";
import { resetPassword } from "../../actions/ownerAuth.js";

const ResetPassword = ({ resetPassword, setAlert }) => {
  const params = useParams();

  const [formData, setFormData] = React.useState({
    password: "",
    password2: "",
    passwordResetToken: params.passwordResetToken,
  });

  const { password, password2, passwordResetToken } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      resetPassword({ password, passwordResetToken });
    }
    setFormData({ ...formData, password: "", password2: "" });
  };

  return (
    <section className="login-container">
      <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <h2 className="u-margin-bottom-small">Reset Password</h2>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
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

export default connect(mapStateToProps, { resetPassword, setAlert })(
  ResetPassword
);
