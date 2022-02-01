import React from "react";

const Button = ({ onClick, text, isDisabled = false }) => (
  <button
    type="button"
    style={{ marginLeft: "5px" }}
    onClick={onClick}
    disabled={isDisabled}
  >
    {text}
  </button>
);

export default Button;
