import React from "react";

function Websitebutton(props) {
  return (
    <button
      className={`btn btn-${props.color} `}
      onClick={props.onClick}
      // disabled={props.isDisabled}
    >
      {props.text}
    </button>
  );
}

export default Websitebutton;
