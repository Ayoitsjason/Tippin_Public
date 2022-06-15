import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { setRole } from "../../actions/role.js";
import { register } from "../../actions/customerAuth.js";
import { getAllBusiness } from "../../actions/business";
import BusinessList from "./BusinessList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = ({
  success,
  setRole,
  register,
  getAllBusiness,
  isAuthenticated,
  owner,
  businesses,
}) => {
  React.useEffect(() => {
    setRole("Customer");
    getAllBusiness();
  }, [setRole, getAllBusiness]);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    number: "",
    business: `${isAuthenticated ? owner.business : ""}`,
  });

  const { name, email, number } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  if (!isAuthenticated && success) return <Navigate replace to="/" />;
  if (isAuthenticated && success)
    return <Navigate replace to="/owner/checkin" />;

  return (
    <section className="register-container">
      <Form className="register-form" onSubmit={(e) => onSubmit(e)}>
        <h2 className="u-margin-bottom-small">Customer Registration</h2>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 business-list"
          controlId="formBasicBusiness"
        >
          <Form.Label>Business</Form.Label>
          <Form.Select name="business" onChange={(e) => onChange(e)}>
            <BusinessList
              businesses={businesses}
              isAuthenticated={isAuthenticated}
              owner={owner}
            />
          </Form.Select>
        </Form.Group>
        <Form.Group
          style={{ padding: "0 1rem" }}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label="Agree to receive survey & promotional messages"
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

Register.propTypes = {
  success: PropTypes.bool,
  setRole: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  getAllBusiness: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  owner: PropTypes.object,
  businesses: PropTypes.array,
};

const mapStateToProps = (state) => ({
  success: state.customerAuth.success,
  isAuthenticated: state.ownerAuth.isAuthenticated,
  owner: state.ownerAuth.owner,
  businesses: state.businesses,
});

export default connect(mapStateToProps, { setRole, register, getAllBusiness })(
  Register
);
