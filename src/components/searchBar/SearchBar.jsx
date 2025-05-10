import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="bg-body-tertiary searchBar-container">
      <div className="input-group">
        <div className="form-outline search-bar" data-mdb-input-init>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "grey" }} />
          <input
            type="search"
            id="form1"
            className="form-control bg-body-tertiary"
            placeholder="Search by Script Name"
            style={{ border: "none", boxShadow: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
