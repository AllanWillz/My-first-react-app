import React from "react";
import InputFields from "../components/InputFields";
import "bootstrap/dist/css/bootstrap.min.css";

function PersonalInfo() {
  return (
    <>
      <div>
        <h1 className="text-center">Personal Information</h1>
      </div>
      <InputFields
        label="First name"
        type="text"
        value=""
        onChange={(e) => {
          console.log(e);
        }}
      />
      <InputFields
        label="Last name"
        type="text"
        value=""
        onChange={(e) => {
          console.log(e);
        }}
      />
      <InputFields
        label="User name"
        type="text"
        value=""
        onChange={(e) => {
          console.log(e);
        }}
      />
    </>
  );
}

export default PersonalInfo;
