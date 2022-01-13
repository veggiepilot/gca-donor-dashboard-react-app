/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container ,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignIn = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
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
      email: "",
      password: "",
    });
  };
  return (
    <Container
      className="d-flex flex-column justify-content-center align-content-center min-vh-100 w-50 "
      fluid={true}
    >
      <div className="signin d-flex flex-column justify-content-center align-content-center p-4">
        <div>
          <h1 className="text-center m-3">Sign In</h1>
        </div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
        <>
          <form onSubmit={handleFormSubmit}>
            <Row className="d-flex flex-row justify-content-center align-content-center">
            <div className="form-group d-flex flex-column justify-content-center align-content-center w-25">
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
            <div className="form-group d-flex flex-column justify-content-center align-content-center w-25">
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
            </Row>              
          </form> 
          <br/>
          <div className="w-50 d-flex flex-row justify-content-end align-content-end">
          <Link to="/dashboard">
              <button
                type="submit"
                className="btn btn-secondary btn-lrg"
              >
                Sign In
              </button>
          </Link>
          </div>
          <br/>         
           <p className="text-center">
              <small className="text-muted text-center">
                Don't have an account yet?<Link to="/signup">Sign Up</Link>.
              </small>
          </p>
          </>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </Container>
  );
};

export default SignIn;
