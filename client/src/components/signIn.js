import React from "react";

const SignIn = () => {
  return (
    <div>
      <div>
        <h1>Sign In</h1>
      </div>
      <form>
        <div>
          <lable>Email Address</lable>
          <input placeholder="example@example.com"></input>
        </div>
        <div>
          <lable>Password</lable>
          <input placeholder="Enter Your Password"></input>
        </div>
        <button type="button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
