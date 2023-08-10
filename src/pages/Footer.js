import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <h4>Copyright © 2023. All rights are reserved</h4>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mahendra-reddy-265276170/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a target="_blank" href="https://github.com/mahe1999mh">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
