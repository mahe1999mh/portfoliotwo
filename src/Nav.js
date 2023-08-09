import React, { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={open ? "Header2" : "Header"}>
        <h3 className="logo">{!open ? "Stefan.dev" : ""}</h3>

        {/* <ul className="nav">
        
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul> */}
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <ul className="mobileMenu">
          <li
            className="triger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? (
              <FontAwesomeIcon icon={faBars} size="2xl" />
            ) : (
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            )}
          </li>
        </ul>
        <ul className={open ? "nav2" : "navClose"}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
