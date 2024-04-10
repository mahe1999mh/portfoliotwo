import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Nav = ({open,setOpen}) => {
  let menu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={open ? "Header2" : "Header"}>
        <h3 className="logo">{!open ? "Mahendra Reddy" : ""}</h3>

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
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="mobileMenu">
          <li className="triger" onClick={menu}>
            {!open ? (
              <FontAwesomeIcon icon={faBars} size="2xl" />
            ) : (
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            )}
          </li>
        </ul>
        <ul className={open ? "nav2" : "navClose"}>
          <li onClick={menu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={menu}>
            <a href="#about">About</a>
          </li>
          <li onClick={menu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={menu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
