import "./ScriptButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const ScriptButtons = () => {
  return (
    <>
      <div className="background-container">
        <div className="icon-text-script">
          <div
            className="script-btn-icon-text"
            style={{ borderRight: "2px solid black" }}
          >
            <div className="plus-background">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="plus-text">
              <span>Press and hold to select</span>
              <span className="script-text">script</span>
            </div>
          </div>

          <div className="script-btn-icon-text">
            <div className="plus-background">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="plus-text2">
              <span>Press and hold to select</span>
              <span>script</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScriptButtons;
