import React from "react";
import InputFields from "../components/InputFields";
import InputData from "../components/InputData";
import "bootstrap/dist/css/bootstrap.min.css";

function Address() {
  return (
    <div className="text-center">
      <div className="text-center">
        <h1>Address</h1>
      </div>
      {InputData.addressInfo.map((item, index) => {
        return (
          <InputFields
            type={item.type}
            label={item.label}
            key={index}
            value=""
            onChange={(e) => console.log(e)}
          />
          //     <InputFields
          //   type="text"
          //   label="City"
          //   value=""
          //   onChange={(e) => console.log(e)}
          // />
        );
      })}
    </div>
  );
}

export default Address;
