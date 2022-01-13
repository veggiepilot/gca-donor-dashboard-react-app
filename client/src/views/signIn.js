/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {  Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <Container
      className="bg-dark bg-gradient text-white d-flex justify-content-center align-content-center"
      fluid={true}
    >
      <div className="col-xl-4 col-md-5 col-12 ">
        <div>
          <h1 className="text-center">Sign In</h1>
        </div>
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              placeholder="example@example.com"
              className="form-input"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              placeholder="Enter Your Password"
              className="form-input"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            ></input>
          </div>
          <Link to="/dashboard">
            <button type="submit" className="w-100 mb-3 btn btn-primary btn-lrg">
              Sign In
            </button>
          </Link>
          <p className="text-center">
            <small className="text-muted text-center">
              Don't have an account yet?<Link to="/signup">Sign Up</Link>.
            </small>
          </p>
        </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SignIn;
