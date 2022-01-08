import React from "react";

const SignUp = () => {
  return (
    <div class="col-xl-4 col-md-5 col-12">
      <div>
        <h1 class="text-center">Sign Up</h1>
      </div>
      <form>
        <div class="form-group">
          <lable class="form-lable">Email Address</lable>
          <input placeholder="example@example.com" class="form-control"></input>
        </div>
        <div class="form-group">
          <lable class="form-lable">Password</lable>
          <input placeholder="Enter Your Password" class="form-control"></input>
        </div>
        <button type="button" class="w-100 mb-3 btn btn-primary btn-lrg">Sign Up</button>
        <p class="text-center">
          <small class="text-muted text-center">
            Already have an account? <a href="./signIn">Sign In</a>.
          </small>
        </p>
      </form>
    </div>
  );
};

export default SignUp;