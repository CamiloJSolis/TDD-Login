import React, { useState } from "react";
import "./Login.css";

const Login = ({ submit = () => {} }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    // update values as the user types
    const updatedValues = { ...values, [id]: value };
    setValues(updatedValues);

    // validate only this field
    const fieldErrors = validate(updatedValues);
    setErrors({ ...errors, [id]: fieldErrors[id] || "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values); // validate values, not errors
    setErrors(validationErrors); // set errors directly
    if (Object.keys(validationErrors).length === 0) {
      submit(values);
      alert("Sign in successful!")
    }
  };

  const validate = (values) => {
    const errors = {};
    const userNameRegex = /^[a-zA-Z0-9][a-zA-Z0-9_]{2,}$/;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!values.username) {
      errors.username = "Username is required";
    } else if (!userNameRegex.test(values.username)) {
      errors.username =
        "Username must be at least 3 characters (letters, numbers, or underscores).";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must be at least one uppercase letter, one lowercase letter, one digit, one special character, and a minimum length of 8 characters.";
    }

    return errors;
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <h5>To continue to TDD</h5>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Goku123"
              onChange={handleChange}
              value={values.username}
              className="input-field"
            />
            <p>{errors.username}</p>
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              className="input-field"
            />
            <p>{errors.password}</p>
          </div>

          <button
            type="submit"
            className="btn-signin"
            disabled={!values.username || !values.password}
            title={
              !values.username || !values.password
                ? "Por favor, ingrese ambos campos"
                : ""
            }
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
