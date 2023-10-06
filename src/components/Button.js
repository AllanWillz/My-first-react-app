// USING PROPS FOR THE BUTTONS

import React from "react";

function Button(props) {
  return (
    <button type="button" className={props.color} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
