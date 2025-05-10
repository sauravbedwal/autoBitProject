import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUpload,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import "./ScriptData.css";
import { scriptDataArray } from "../../utils/mockData/MockData";

const ScriptData = () => {
  return (
    <div
      className="bg-body-tertiary scriptData-container"
      style={{ width: "30vw" }}
    >
      <div className="bg-script">
        <p style={{ fontWeight: "500" }}>Script</p>
        <div className="bid-ask-container">
          <p style={{ fontWeight: "500" }}>Bid</p>
          <p style={{ fontWeight: "500" }}>Ask</p>
        </div>
      </div>

      {scriptDataArray.map((data, index) => (
        <div key={index} className="bg-script2">
          {/* Script */}
          <div>
            <p className="graph" style={{ textAlign: "left" }}>
              <FontAwesomeIcon icon={faSignal} /> {data.signal}
            </p>
            <p className="script-name" style={{ textAlign: "left" }}>
              {data.name}
            </p>
            <p className="graph" style={{ textAlign: "left" }}>
              {data.time} <span>[]</span> {data.value}
            </p>
            <p className="graph" style={{ textAlign: "left" }}>
              {data.zero}
            </p>
          </div>

          <div className="bid-ask-container2">
            {/* Bid */}
            <div>
              <p
                style={{
                  textAlign: "right",
                  color: data.bid.color,
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                {data.bid.main}.
                <span style={{ fontSize: "40px" }}>{data.bid.large}</span>
                <span style={{ fontSize: "18px" }}>{data.bid.small}</span>
              </p>
              <p className="graph" style={{ textAlign: "right" }}>
                <FontAwesomeIcon icon={faDownload} /> {data.bid.download}
              </p>
              <p className="graph" style={{ textAlign: "right" }}>
                C: {data.bid.c}
              </p>
            </div>

            {/* Ask */}
            <div>
              <p
                style={{
                  textAlign: "right",
                  color: data.ask.color,
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                {data.ask.main}.
                <span style={{ fontSize: "40px" }}>{data.ask.large}</span>
                <span style={{ fontSize: "18px" }}>{data.ask.small}</span>
              </p>
              <p className="graph" style={{ textAlign: "right" }}>
                <FontAwesomeIcon icon={faUpload} /> {data.ask.upload}
              </p>
              <p className="graph" style={{ textAlign: "right" }}>
                L: {data.ask.l}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScriptData;
