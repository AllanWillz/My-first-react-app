import React from "react";

function InputFields(props) {
  return (
    <div>
      <>
        <div className="col">
          <label htmlFor="input" className="formLable">
            {props.label}
          </label>

          <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
      </>
    </div>
  );
}

export default InputFields;
