import React from "react";
import "./Header.css";
import burgerMenu from "../../assets/burgerMenu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary header-container">
        <div className="container-fluid">
          <img src={burgerMenu} width="40px" height="30px" />
          <a className="navbar-brand header-heading" href="#">
            Quotes
          </a>
          <div className="rightIcons">
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        </div>
        <p className="header-info">
          Public News: For Support, Call +91 8918085080 ( Whatsapp Only )
        </p>
      </nav>
    </>
  );
};

export default Header;
