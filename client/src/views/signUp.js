/* eslint-disable no-unused-vars */
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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
      className="bg-dark bg-gradient text-white p-4 d-flex justify-content-center align-content-center"
      fluid
    >
      <div className="col-xl-4 col-md-5 col-12">
        <div>
          <h1 className="text-center">Sign Up</h1>
        </div>
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
        <div className="form-input">
            <label className="form-label">First Name</label>
            <input
              placeholder="First Name"
              className="form-input"
              name="firstName"
              type="text"
              value={formState.firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              placeholder="Last Name"
              className="form-input"
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={handleChange}
            ></input>
          </div>
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
            <button type="submit" className="w-100 mb-3 btn btn-primary btn-lrg">
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
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SignUp;
