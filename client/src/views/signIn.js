import React from "react";
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Container
      className="bg-dark bg-gradient text-white p-4 d-flex justify-content-center align-content-center"
      fluid="true"
    >
      <div class="col-xl-4 col-md-5 col-12">
        <div>
          <h1 class="text-center">Sign In</h1>
        </div>
        <form>
          <div class="form-group">
            <lable class="form-lable">Email Address</lable>
            <input
              placeholder="example@example.com"
              class="form-control"
            ></input>
          </div>
          <div class="form-group">
            <lable class="form-lable">Password</lable>
            <input
              placeholder="Enter Your Password"
              class="form-control"
            ></input>
          </div>
          <Link to="/dashboard">
            <button type="button" class="w-100 mb-3 btn btn-primary btn-lrg">
              Sign In
            </button>
          </Link>
          <p class="text-center">
            <small class="text-muted text-center">
              Don't have an account yet?<Link to="/signup">Sign Up</Link>.
            </small>
          </p>
        </form>
        <Outlet />
      </div>
    </Container>
  );
};

export default SignIn;
