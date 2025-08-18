import React, { useState } from "react";
import "./Login.css";

const Login = ({ submit = () => {} }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(values);
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
          </div>

          <button
            type="submit"
            className="btn-signin"
            disabled={!values.username || !values.password}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
