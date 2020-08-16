import React from "react";

import "./index.css";

export function Switch({ checked }) {
  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={checked} />
      <span className="switch__slider switch__slider--round"></span>
    </label>
  );
}
