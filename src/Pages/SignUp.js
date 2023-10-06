import React from "react";
import InputFields from "../components/InputFields";
import { Form } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  return (
    <>
      <div>
        <h1 className="text-center">Sign Up</h1>
      </div>
      <InputFields
        label="Email"
        type="email"
        value=""
        onChange={(e) => console.log(e)}
      />
      <InputFields
        label="Password"
        type="password"
        value=""
        onChange={(e) => console.log(e)}
      />
      <InputFields
        label="Confirm password"
        type="password"
        value=""
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default SignUp;
