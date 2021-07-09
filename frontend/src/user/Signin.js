import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    loading: false,
    didRedirect: false,
  });

  const { name, email, password, error, success, loading, didRedirect } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please
            <Link to="/signin"> Login</Link> now.
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check out all fields again.
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={handleChange("email")}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handleChange("password")}
              />
            </div>

            <button onClick={() => {}} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Welcome to signin page" description="Apni Dukan">
      {signInForm()}
      <p className="text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
