import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { signIn } from "../../actions/ownerAuth";

const Login = ({ signIn, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  if (isAuthenticated) {
    return <Navigate replace to="/owner/dashboard/home" />;
  }

  return (
    <section className="login-container">
      <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <h2 className="u-margin-bottom-small">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="login-container__sub-links">
          <Link to="/owner/forgotpassword">Forgot Password?</Link>
        </p>
        <p className="login-container__sub-links">
          Don't have an account? <Link to="/owner/register">Register</Link>
        </p>
      </Form>
    </section>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.ownerAuth.isAuthenticated,
});

export default connect(mapStateToProps, { signIn })(Login);
