import React from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  return (
    <div className="bg-body-tertiary toggle-container">
      <div className="toggle-btn">
        <div class="check">
          <input id="check" type="checkbox" />
          <label for="check"></label>
        </div>
        <p>Pro View</p>
      </div>

      <div className="toggle-btn">
        <p>One Click Trade</p>
        <div class="check">
          <input id="check1" type="checkbox" />
          <label for="check1"></label>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
