import React from "react";
import "./ScriptButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const ScriptButtons = () => {
  return (
    <>
      <div className="background-container" style={{ width: "30vw" }}>
        <div className="icon-text-script">
          <div className="plus-background">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="plus-text">
            <span>Press and hold to select</span>
            <span className="script-text">script</span>
          </div>

          <div className="plus-background">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="plus-text2">
            <span>Press and hold to select</span>
            <span>script</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScriptButtons;
