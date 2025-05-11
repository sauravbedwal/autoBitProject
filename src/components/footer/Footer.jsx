import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="background-container-footer">
      <div className="footer-icon-text">
        <span>
          <FontAwesomeIcon icon={faArrowUp} />
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
        Quotes
      </div>
      <div className="footer-icon-text">
        <span>
          <FontAwesomeIcon icon={faSignal} />
        </span>
        Deals
      </div>
      <div
        className="footer-icon-text"
        style={{
          width: "46px",
          background: "rgb(239 44 119)",
          padding: "12px",
          borderRadius: "70px",
          color: "wheat",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </div>
      <div className="footer-icon-text">
        <span>
          <FontAwesomeIcon icon={faSignal} />
          <FontAwesomeIcon
            icon={faCircleDollarToSlot}
            style={{ position: "relative", bottom: "8px", right: "9px" }}
          />
        </span>
        Net Deals
      </div>
      <div className="footer-icon-text">
        <span>
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </span>
        History
      </div>
    </div>
  );
};

export default Footer;
