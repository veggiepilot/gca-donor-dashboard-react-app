/* eslint-disable no-unused-vars */
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUp = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container
      className=" d-flex flex-column w-50 justify-content-center align-content-center min-vh-100"
      fluid
    >
      <div className=" signup d-flex flex-column justify-content-center align-content-center p-4">
        <div>
          <h1 className="text-center m-3">Sign Up</h1>
        </div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="form-input d-flex flex-column justify-center align-center">
              <label className="form-label text-muted m-2">First Name</label>
              <input
                placeholder="First Name"
                className="form-input"
                name="firstName"
                type="text"
                value={formState.firstName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group d-flex flex-column justify-center align-center">
              <label className="form-label text-muted m-2">Last Name</label>
              <input
                placeholder="Last Name"
                className="form-input"
                name="lastName"
                type="text"
                value={formState.lastName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group d-flex flex-column justify-center align-center">
              <label className="form-label text-muted m-2">Email Address</label>
              <input
                placeholder="example@example.com"
                className="form-input"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group d-flex flex-column justify-center align-center">
              <label className="form-label text-muted m-2">Password</label>
              <input
                placeholder="Enter Your Password"
                className="form-input"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              className="w-100 mb-3 mt-3 btn btn-primary btn-lrg"
            >
              Sign Up
            </button>

            <p className="text-center">
              <small className="text-muted text-center">
                Already have an account? <Link to="/signin">Sign In</Link>.
              </small>
            </p>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </Container>
  );
};

export default SignUp;
