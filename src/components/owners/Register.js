import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/ownerAuth";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    business: "",
  });

  const { name, email, password, password2, business } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match.", "danger");
    } else {
      register({ name, email, password, business });
    }
  };

  if (isAuthenticated) {
    return <Navigate replace to="/owner/dashboard/home" />;
  }

  return (
    <section className="register-container">
      <Form className="register-form" onSubmit={(e) => onSubmit(e)}>
        <h2 className="u-margin-bottom-small">Register</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBusiness">
          <Form.Label>Business</Form.Label>
          <Form.Control
            type="business"
            placeholder="Enter business"
            name="business"
            value={business}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="register-container__signin">
          Already have an account? <Link to="/owner/login">Sign In</Link>
        </p>
      </Form>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.ownerAuth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
